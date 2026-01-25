<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LicenseRequest;
use App\Models\License;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLicenseController extends Controller
{
    /**
     * Display a listing of licenses.
     */
    public function index(Request $request)
    {
        $query = License::with(['user', 'product', 'order']);

        // Search
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('license_key', 'like', "%{$request->search}%")
                    ->orWhereHas('user', function ($userQuery) use ($request) {
                        $userQuery->where('name', 'like', "%{$request->search}%")
                            ->orWhere('email', 'like', "%{$request->search}%");
                    })
                    ->orWhereHas('product', function ($productQuery) use ($request) {
                        $productQuery->where('name', 'like', "%{$request->search}%");
                    });
            });
        }

        // Status filter
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Product filter
        if ($request->filled('product_id')) {
            $query->where('product_id', $request->product_id);
        }

        $licenses = $query->orderBy('created_at', 'desc')
            ->paginate(15)
            ->through(fn ($license) => [
                'id' => $license->id,
                'key' => $license->license_key,
                'user' => [
                    'id' => $license->user->id,
                    'name' => $license->user->name,
                    'email' => $license->user->email,
                ],
                'product' => [
                    'id' => $license->product->id,
                    'name' => $license->product->name,
                ],
                'order' => $license->order ? [
                    'id' => $license->order->id,
                    'number' => $license->order->order_number,
                ] : null,
                'status' => $license->status,
                'activations' => $license->activations,
                'maxActivations' => $license->max_activations,
                'purchasedAt' => $license->purchased_at?->format('M d, Y'),
                'expiresAt' => $license->expires_at?->format('M d, Y'),
                'isExpired' => $license->isExpired(),
            ]);

        $stats = [
            'total' => License::count(),
            'active' => License::where('status', 'active')->count(),
            'expired' => License::where('status', 'expired')->count(),
            'revoked' => License::where('status', 'revoked')->count(),
        ];

        // Get products and users for dropdowns
        $products = Product::select('id', 'name')->orderBy('name')->get();
        $users = User::select('id', 'name', 'email')->orderBy('name')->get();

        return Inertia::render('Admin/Licenses', [
            'licenses' => $licenses->items(),
            'pagination' => [
                'currentPage' => $licenses->currentPage(),
                'totalPages' => $licenses->lastPage(),
                'total' => $licenses->total(),
            ],
            'stats' => $stats,
            'filters' => $request->only(['search', 'status', 'product_id']),
            'products' => $products,
            'users' => $users,
        ]);
    }

    /**
     * Store a newly created license.
     */
    public function store(LicenseRequest $request)
    {
        $license = License::create([
            'user_id' => $request->user_id,
            'product_id' => $request->product_id,
            'order_id' => $request->order_id,
            'max_activations' => $request->max_activations,
            'expires_at' => $request->expires_at,
            'status' => 'active',
        ]);

        return back()->with('success', "License created: {$license->license_key}");
    }

    /**
     * Revoke the specified license.
     */
    public function revoke(Request $request, License $license)
    {
        $request->validate([
            'reason' => ['nullable', 'string', 'max:255'],
        ]);

        if ($license->status === 'revoked') {
            return back()->with('error', 'License is already revoked.');
        }

        $license->revoke($request->reason);

        return back()->with('success', 'License revoked successfully.');
    }

    /**
     * Reset activations for the specified license.
     */
    public function resetActivations(License $license)
    {
        $license->resetActivations();

        return back()->with('success', 'License activations reset successfully.');
    }

    /**
     * Update the specified license.
     */
    public function update(Request $request, License $license)
    {
        $request->validate([
            'max_activations' => ['sometimes', 'integer', 'min:1', 'max:100'],
            'expires_at' => ['nullable', 'date'],
            'status' => ['sometimes', 'in:active,expired,revoked'],
        ]);

        $license->update($request->only(['max_activations', 'expires_at', 'status']));

        return back()->with('success', 'License updated successfully.');
    }

    /**
     * Remove the specified license.
     */
    public function destroy(License $license)
    {
        $license->delete();

        return back()->with('success', 'License deleted successfully.');
    }
}
