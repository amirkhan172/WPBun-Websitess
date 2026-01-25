<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    /**
     * Display a listing of products.
     */
    public function index(Request $request)
    {
        $query = Product::query();

        // Search
        if ($request->filled('search')) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'like', "%{$request->search}%")
                    ->orWhere('slug', 'like', "%{$request->search}%");
            });
        }

        // Category filter
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        // Status filter
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        $products = $query->orderBy('created_at', 'desc')
            ->paginate(15)
            ->through(fn ($product) => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'price' => (float) $product->price,
                'originalPrice' => $product->original_price ? (float) $product->original_price : null,
                'category' => $product->category,
                'status' => $product->status,
                'image' => $product->image,
                'sales' => $product->sales,
                'downloads' => $product->downloads,
                'rating' => (float) $product->rating,
                'createdAt' => $product->created_at->format('M d, Y'),
            ]);

        $stats = [
            'total' => Product::count(),
            'active' => Product::where('status', 'active')->count(),
            'drafts' => Product::where('status', 'draft')->count(),
            'inactive' => Product::where('status', 'inactive')->count(),
        ];

        return Inertia::render('Admin/Products', [
            'products' => $products->items(),
            'pagination' => [
                'currentPage' => $products->currentPage(),
                'totalPages' => $products->lastPage(),
                'total' => $products->total(),
                'perPage' => $products->perPage(),
            ],
            'stats' => $stats,
            'filters' => $request->only(['search', 'category', 'status']),
        ]);
    }

    /**
     * Store a newly created product.
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());

        return back()->with('success', 'Product created successfully.');
    }

    /**
     * Update the specified product.
     */
    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return back()->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified product.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return back()->with('success', 'Product deleted successfully.');
    }

    /**
     * Bulk action on products.
     */
    public function bulkAction(Request $request)
    {
        $request->validate([
            'ids' => ['required', 'array'],
            'ids.*' => ['exists:products,id'],
            'action' => ['required', 'in:delete,activate,deactivate,draft'],
        ]);

        $products = Product::whereIn('id', $request->ids);

        switch ($request->action) {
            case 'delete':
                $products->delete();
                $message = 'Products deleted successfully.';
                break;
            case 'activate':
                $products->update(['status' => 'active']);
                $message = 'Products activated successfully.';
                break;
            case 'deactivate':
                $products->update(['status' => 'inactive']);
                $message = 'Products deactivated successfully.';
                break;
            case 'draft':
                $products->update(['status' => 'draft']);
                $message = 'Products moved to draft.';
                break;
            default:
                $message = 'Action completed.';
        }

        return back()->with('success', $message);
    }
}
