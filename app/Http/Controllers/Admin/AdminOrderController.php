<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\OrderUpdateRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminOrderController extends Controller
{
    /**
     * Display a listing of orders.
     */
    public function index(Request $request)
    {
        $query = Order::with(['user', 'products']);

        // Search
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('order_number', 'like', "%{$request->search}%")
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

        // Date range filter
        if ($request->filled('from_date')) {
            $query->whereDate('created_at', '>=', $request->from_date);
        }
        if ($request->filled('to_date')) {
            $query->whereDate('created_at', '<=', $request->to_date);
        }

        $orders = $query->orderBy('created_at', 'desc')
            ->paginate(15)
            ->through(fn ($order) => [
                'id' => $order->order_number,
                'orderId' => $order->id,
                'customer' => [
                    'name' => $order->user->name,
                    'email' => $order->user->email,
                ],
                'products' => $order->products->pluck('name')->toArray(),
                'amount' => (float) $order->total,
                'status' => $order->status,
                'paymentMethod' => $order->payment_method ?? 'N/A',
                'date' => $order->created_at->format('M d, Y'),
                'completedAt' => $order->completed_at?->format('M d, Y'),
                'refundedAt' => $order->refunded_at?->format('M d, Y'),
            ]);

        $stats = [
            'total' => Order::count(),
            'totalOrders' => Order::count(),
            'pending' => Order::where('status', 'pending')->count(),
            'processing' => Order::where('status', 'processing')->count(),
            'completed' => Order::where('status', 'completed')->count(),
            'refunded' => Order::where('status', 'refunded')->count(),
            'revenue' => '$' . number_format(Order::where('status', 'completed')->sum('total'), 2),
        ];

        return Inertia::render('Admin/Orders', [
            'orders' => $orders->items(),
            'pagination' => [
                'currentPage' => $orders->currentPage(),
                'totalPages' => $orders->lastPage(),
                'total' => $orders->total(),
            ],
            'stats' => $stats,
            'filters' => $request->only(['search', 'status', 'from_date', 'to_date']),
        ]);
    }

    /**
     * Display the specified order.
     */
    public function show(Order $order)
    {
        $order->load(['user', 'products', 'licenses']);

        return Inertia::render('Admin/OrderDetail', [
            'order' => [
                'id' => $order->order_number,
                'orderId' => $order->id,
                'customer' => [
                    'id' => $order->user->id,
                    'name' => $order->user->name,
                    'email' => $order->user->email,
                ],
                'products' => $order->products->map(fn ($product) => [
                    'id' => $product->id,
                    'name' => $product->name,
                    'price' => (float) $product->pivot->price,
                    'quantity' => $product->pivot->quantity,
                ]),
                'amount' => (float) $order->amount,
                'tax' => (float) $order->tax,
                'discount' => (float) $order->discount,
                'total' => (float) $order->total,
                'status' => $order->status,
                'paymentMethod' => $order->payment_method,
                'paymentId' => $order->payment_id,
                'billingAddress' => $order->billing_address,
                'notes' => $order->notes,
                'date' => $order->created_at->format('M d, Y H:i'),
                'completedAt' => $order->completed_at?->format('M d, Y H:i'),
                'refundedAt' => $order->refunded_at?->format('M d, Y H:i'),
                'licenses' => $order->licenses->map(fn ($license) => [
                    'id' => $license->id,
                    'key' => $license->license_key,
                    'status' => $license->status,
                    'product' => $license->product->name ?? 'N/A',
                ]),
            ],
        ]);
    }

    /**
     * Update the specified order.
     */
    public function update(OrderUpdateRequest $request, Order $order)
    {
        $data = $request->validated();

        // Handle status changes
        if (isset($data['status'])) {
            if ($data['status'] === 'completed' && $order->status !== 'completed') {
                $data['completed_at'] = now();
            }
            if ($data['status'] === 'refunded' && $order->status !== 'refunded') {
                $data['refunded_at'] = now();
            }
        }

        $order->update($data);

        return back()->with('success', 'Order updated successfully.');
    }

    /**
     * Process refund for the order.
     */
    public function refund(Request $request, Order $order)
    {
        if ($order->status === 'refunded') {
            return back()->with('error', 'Order is already refunded.');
        }

        $order->markAsRefunded();

        // Revoke all licenses for this order
        $order->licenses()->each(function ($license) {
            $license->revoke('Order refunded');
        });

        return back()->with('success', 'Order refunded successfully. Associated licenses have been revoked.');
    }
}
