<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Product;
use App\Models\Order;
use App\Models\License;
use App\Models\SupportTicket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Admin Dashboard
     */
    public function dashboard()
    {
        // Calculate real stats
        $totalRevenue = Order::where('status', 'completed')->sum('total');
        $lastMonthRevenue = Order::where('status', 'completed')
            ->whereMonth('created_at', now()->subMonth()->month)
            ->sum('total');
        $revenueChange = $lastMonthRevenue > 0
            ? round((($totalRevenue - $lastMonthRevenue) / $lastMonthRevenue) * 100, 1)
            : 0;

        $totalOrders = Order::count();
        $lastMonthOrders = Order::whereMonth('created_at', now()->subMonth()->month)->count();
        $ordersChange = $lastMonthOrders > 0
            ? round((($totalOrders - $lastMonthOrders) / $lastMonthOrders) * 100, 1)
            : 0;

        $totalUsers = User::count();
        $lastMonthUsers = User::whereMonth('created_at', now()->subMonth()->month)->count();
        $usersChange = $lastMonthUsers > 0
            ? round((($totalUsers - $lastMonthUsers) / $lastMonthUsers) * 100, 1)
            : 0;

        $activeLicenses = License::where('status', 'active')->count();
        $lastMonthLicenses = License::where('status', 'active')
            ->whereMonth('created_at', now()->subMonth()->month)
            ->count();
        $licensesChange = $lastMonthLicenses > 0
            ? round((($activeLicenses - $lastMonthLicenses) / $lastMonthLicenses) * 100, 1)
            : 0;

        // Recent orders
        $recentOrders = Order::with(['user', 'products'])
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(fn ($order) => [
                'id' => $order->order_number,
                'customer' => $order->user->name,
                'product' => $order->products->first()?->name ?? 'N/A',
                'amount' => '$' . number_format($order->total, 2),
                'status' => $order->status,
                'date' => $order->created_at->format('M d, Y'),
            ]);

        // Top products by sales
        $topProducts = Product::orderBy('sales', 'desc')
            ->take(5)
            ->get()
            ->map(fn ($product) => [
                'name' => $product->name,
                'sales' => $product->sales,
                'revenue' => '$' . number_format($product->price * $product->sales, 2),
            ]);

        // Recent activities
        $recentActivities = collect();

        // Add recent orders as activities
        Order::orderBy('created_at', 'desc')->take(3)->get()->each(function ($order) use ($recentActivities) {
            $recentActivities->push([
                'type' => 'order',
                'message' => "New order #{$order->order_number} placed",
                'time' => $order->created_at->diffForHumans(),
            ]);
        });

        // Add recent support tickets
        SupportTicket::orderBy('created_at', 'desc')->take(2)->get()->each(function ($ticket) use ($recentActivities) {
            $recentActivities->push([
                'type' => 'support',
                'message' => "New ticket: {$ticket->subject}",
                'time' => $ticket->created_at->diffForHumans(),
            ]);
        });

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalRevenue' => [
                    'value' => '$' . number_format($totalRevenue, 2),
                    'change' => ($revenueChange >= 0 ? '+' : '') . $revenueChange . '%',
                    'trend' => $revenueChange >= 0 ? 'up' : 'down',
                ],
                'totalOrders' => [
                    'value' => (string) $totalOrders,
                    'change' => ($ordersChange >= 0 ? '+' : '') . $ordersChange . '%',
                    'trend' => $ordersChange >= 0 ? 'up' : 'down',
                ],
                'totalUsers' => [
                    'value' => (string) $totalUsers,
                    'change' => ($usersChange >= 0 ? '+' : '') . $usersChange . '%',
                    'trend' => $usersChange >= 0 ? 'up' : 'down',
                ],
                'activeLicenses' => [
                    'value' => (string) $activeLicenses,
                    'change' => ($licensesChange >= 0 ? '+' : '') . $licensesChange . '%',
                    'trend' => $licensesChange >= 0 ? 'up' : 'down',
                ],
            ],
            'recentOrders' => $recentOrders,
            'topProducts' => $topProducts,
            'recentActivities' => $recentActivities->take(5)->values(),
        ]);
    }

    /**
     * Users Management
     */
    public function users()
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'role' => $user->role ?? 'user',
                    'status' => 'active', // Default status - can be enhanced later
                    'orders' => 0, // Will be populated when orders table exists
                    'spent' => '$0',
                    'joinedAt' => $user->created_at->format('M d, Y'),
                ];
            });

        $stats = [
            'total' => User::count(),
            'active' => User::count(), // All users are active for now
            'newThisMonth' => User::whereMonth('created_at', now()->month)->count(),
            'admins' => User::where('role', 'admin')->count(),
        ];

        return Inertia::render('Admin/Users', [
            'users' => $users,
            'stats' => $stats,
        ]);
    }

    /**
     * Products Management
     */
    public function products()
    {
        // Empty for now - will be populated when products table exists
        return Inertia::render('Admin/Products', [
            'products' => [],
            'stats' => [
                'total' => 0,
                'active' => 0,
                'drafts' => 0,
            ],
        ]);
    }

    /**
     * Orders Management
     */
    public function orders()
    {
        // Empty for now - will be populated when orders table exists
        return Inertia::render('Admin/Orders', [
            'orders' => [],
            'stats' => [
                'total' => 0,
                'pending' => 0,
                'completed' => 0,
                'revenue' => '$0',
            ],
        ]);
    }

    /**
     * Licenses Management
     */
    public function licenses()
    {
        // Empty for now - will be populated when licenses table exists
        return Inertia::render('Admin/Licenses', [
            'licenses' => [],
            'stats' => [
                'total' => 0,
                'active' => 0,
                'expired' => 0,
                'revoked' => 0,
            ],
        ]);
    }

    /**
     * Support Tickets
     */
    public function support()
    {
        // Empty for now - will be populated when support_tickets table exists
        return Inertia::render('Admin/Support', [
            'tickets' => [],
            'stats' => [
                'open' => 0,
                'inProgress' => 0,
                'resolvedToday' => 0,
                'avgResponse' => '-',
            ],
        ]);
    }

    /**
     * Reports & Analytics
     */
    public function reports()
    {
        // Empty for now - will be populated with real analytics data
        return Inertia::render('Admin/Reports', [
            'revenueData' => [],
            'productPerformance' => [],
            'topCountries' => [],
            'stats' => [
                'totalRevenue' => ['value' => '$0', 'change' => '0%', 'trend' => 'up'],
                'totalOrders' => ['value' => '0', 'change' => '0%', 'trend' => 'up'],
                'newCustomers' => ['value' => (string) User::count(), 'change' => '0%', 'trend' => 'up'],
                'avgOrderValue' => ['value' => '$0', 'change' => '0%', 'trend' => 'up'],
            ],
        ]);
    }

    /**
     * Settings
     */
    public function settings()
    {
        return Inertia::render('Admin/Settings');
    }
}
