<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\TicketReplyRequest;
use App\Models\Product;
use App\Models\SupportTicket;
use App\Models\TicketMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminSupportController extends Controller
{
    /**
     * Display a listing of support tickets.
     */
    public function index(Request $request)
    {
        $query = SupportTicket::with(['user', 'product', 'assignedAgent', 'latestMessage']);

        // Search
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('ticket_number', 'like', "%{$request->search}%")
                    ->orWhere('subject', 'like', "%{$request->search}%")
                    ->orWhereHas('user', function ($userQuery) use ($request) {
                        $userQuery->where('name', 'like', "%{$request->search}%")
                            ->orWhere('email', 'like', "%{$request->search}%");
                    });
            });
        }

        // Status filter
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Priority filter
        if ($request->filled('priority')) {
            $query->where('priority', $request->priority);
        }

        // Assigned filter
        if ($request->filled('assigned_to')) {
            $query->where('assigned_to', $request->assigned_to);
        }

        $tickets = $query->orderByRaw("FIELD(status, 'open', 'in_progress', 'resolved', 'closed')")
            ->orderByRaw("FIELD(priority, 'urgent', 'high', 'medium', 'low')")
            ->orderBy('created_at', 'desc')
            ->paginate(15)
            ->through(fn ($ticket) => [
                'id' => $ticket->id,
                'ticketNumber' => $ticket->ticket_number,
                'subject' => $ticket->subject,
                'user' => [
                    'id' => $ticket->user->id,
                    'name' => $ticket->user->name,
                    'email' => $ticket->user->email,
                ],
                'product' => $ticket->product ? [
                    'id' => $ticket->product->id,
                    'name' => $ticket->product->name,
                ] : null,
                'assignedTo' => $ticket->assignedAgent ? [
                    'id' => $ticket->assignedAgent->id,
                    'name' => $ticket->assignedAgent->name,
                ] : null,
                'priority' => $ticket->priority,
                'status' => $ticket->status,
                'lastMessage' => $ticket->latestMessage?->created_at->diffForHumans(),
                'createdAt' => $ticket->created_at->format('M d, Y'),
            ]);

        $stats = [
            'open' => SupportTicket::where('status', 'open')->count(),
            'inProgress' => SupportTicket::where('status', 'in_progress')->count(),
            'resolvedToday' => SupportTicket::whereDate('resolved_at', today())->count(),
            'avgResponse' => $this->calculateAverageResponseTime(),
        ];

        // Get admins for assignment
        $admins = User::where('role', 'admin')->select('id', 'name')->get();
        $products = Product::select('id', 'name')->orderBy('name')->get();

        return Inertia::render('Admin/Support', [
            'tickets' => $tickets->items(),
            'pagination' => [
                'currentPage' => $tickets->currentPage(),
                'totalPages' => $tickets->lastPage(),
                'total' => $tickets->total(),
            ],
            'stats' => $stats,
            'filters' => $request->only(['search', 'status', 'priority', 'assigned_to']),
            'admins' => $admins,
            'products' => $products,
        ]);
    }

    /**
     * Display the specified ticket with messages.
     */
    public function show(SupportTicket $ticket)
    {
        $ticket->load(['user', 'product', 'assignedAgent', 'messages.user']);

        $admins = User::where('role', 'admin')->select('id', 'name')->get();

        return Inertia::render('Admin/TicketDetail', [
            'ticket' => [
                'id' => $ticket->id,
                'ticketNumber' => $ticket->ticket_number,
                'subject' => $ticket->subject,
                'user' => [
                    'id' => $ticket->user->id,
                    'name' => $ticket->user->name,
                    'email' => $ticket->user->email,
                ],
                'product' => $ticket->product ? [
                    'id' => $ticket->product->id,
                    'name' => $ticket->product->name,
                ] : null,
                'assignedTo' => $ticket->assignedAgent ? [
                    'id' => $ticket->assignedAgent->id,
                    'name' => $ticket->assignedAgent->name,
                ] : null,
                'priority' => $ticket->priority,
                'status' => $ticket->status,
                'createdAt' => $ticket->created_at->format('M d, Y H:i'),
                'resolvedAt' => $ticket->resolved_at?->format('M d, Y H:i'),
                'closedAt' => $ticket->closed_at?->format('M d, Y H:i'),
                'messages' => $ticket->messages->map(fn ($message) => [
                    'id' => $message->id,
                    'message' => $message->message,
                    'isInternal' => $message->is_internal,
                    'isFromAdmin' => $message->isFromAdmin(),
                    'user' => [
                        'id' => $message->user->id,
                        'name' => $message->user->name,
                    ],
                    'attachments' => $message->attachments,
                    'createdAt' => $message->created_at->format('M d, Y H:i'),
                ]),
            ],
            'admins' => $admins,
        ]);
    }

    /**
     * Add a reply to the ticket.
     */
    public function reply(TicketReplyRequest $request, SupportTicket $ticket)
    {
        TicketMessage::create([
            'ticket_id' => $ticket->id,
            'user_id' => auth()->id(),
            'message' => $request->message,
            'is_internal' => $request->boolean('is_internal'),
        ]);

        // Auto-update status to in_progress if it was open
        if ($ticket->status === 'open') {
            $ticket->update(['status' => 'in_progress']);
        }

        return back()->with('success', 'Reply added successfully.');
    }

    /**
     * Update the ticket status/priority/assignment.
     */
    public function update(Request $request, SupportTicket $ticket)
    {
        $request->validate([
            'status' => ['sometimes', 'in:open,in_progress,resolved,closed'],
            'priority' => ['sometimes', 'in:low,medium,high,urgent'],
            'assigned_to' => ['nullable', 'exists:users,id'],
        ]);

        $data = $request->only(['status', 'priority', 'assigned_to']);

        // Handle status changes
        if (isset($data['status'])) {
            if ($data['status'] === 'resolved' && $ticket->status !== 'resolved') {
                $data['resolved_at'] = now();
            }
            if ($data['status'] === 'closed' && $ticket->status !== 'closed') {
                $data['closed_at'] = now();
            }
        }

        $ticket->update($data);

        return back()->with('success', 'Ticket updated successfully.');
    }

    /**
     * Close the ticket.
     */
    public function close(SupportTicket $ticket)
    {
        if ($ticket->status === 'closed') {
            return back()->with('error', 'Ticket is already closed.');
        }

        $ticket->close();

        return back()->with('success', 'Ticket closed successfully.');
    }

    /**
     * Calculate average response time.
     */
    private function calculateAverageResponseTime(): string
    {
        // Simple implementation - can be enhanced
        $tickets = SupportTicket::whereNotNull('resolved_at')
            ->whereMonth('created_at', now()->month)
            ->get();

        if ($tickets->isEmpty()) {
            return '-';
        }

        $totalMinutes = $tickets->sum(function ($ticket) {
            return $ticket->created_at->diffInMinutes($ticket->resolved_at);
        });

        $avgMinutes = $totalMinutes / $tickets->count();

        if ($avgMinutes < 60) {
            return round($avgMinutes) . 'm';
        }

        $hours = floor($avgMinutes / 60);
        return $hours . 'h';
    }
}
