<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Routes
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/products', function () {
    return Inertia::render('Products');
})->name('products');

Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');

Route::get('/agency-bundle', function () {
    return Inertia::render('AgencyBundle');
})->name('agency-bundle');

// Resources Pages
Route::get('/documentation', function () {
    return Inertia::render('Documentation');
})->name('documentation');

Route::get('/community', function () {
    return Inertia::render('Community');
})->name('community');

Route::get('/tutorials', function () {
    return Inertia::render('Tutorials');
})->name('tutorials');

// Individual Product Pages
Route::get('/products/postx', function () {
    return Inertia::render('Products/PostX');
})->name('products.postx');

Route::get('/products/wowstore', function () {
    return Inertia::render('Products/WowStore');
})->name('products.wowstore');

Route::get('/products/wowrevenue', function () {
    return Inertia::render('Products/WowRevenue');
})->name('products.wowrevenue');

Route::get('/products/wowaddons', function () {
    return Inertia::render('Products/WowAddons');
})->name('products.wowaddons');

Route::get('/products/wholesalex', function () {
    return Inertia::render('Products/WholesaleX');
})->name('products.wholesalex');

Route::get('/products/wowoptin', function () {
    return Inertia::render('Products/WowOptin');
})->name('products.wowoptin');

Route::get('/products/wowshipping', function () {
    return Inertia::render('Products/WowShipping');
})->name('products.wowshipping');

Route::get('/products/wowapps', function () {
    return Inertia::render('Products/WowApps');
})->name('products.wowapps');

// Company Pages
Route::get('/career', fn() => Inertia::render('Career'))->name('career');
Route::get('/affiliates', fn() => Inertia::render('Affiliates'))->name('affiliates');
Route::get('/privacy-policy', fn() => Inertia::render('PrivacyPolicy'))->name('privacy-policy');
Route::get('/terms-conditions', fn() => Inertia::render('TermsConditions'))->name('terms-conditions');
Route::get('/refund-policy', fn() => Inertia::render('RefundPolicy'))->name('refund-policy');
Route::get('/affiliates-policy', fn() => Inertia::render('AffiliatesPolicy'))->name('affiliates-policy');

// Quick Info Pages
Route::get('/faq', fn() => Inertia::render('FAQ'))->name('faq');
Route::get('/data-collection-policy', fn() => Inertia::render('DataCollectionPolicy'))->name('data-collection-policy');
Route::get('/pre-sales', fn() => Inertia::render('PreSales'))->name('pre-sales');

// Authenticated Routes - User Dashboard
Route::middleware(['auth', 'verified'])->prefix('user')->name('user.')->group(function () {
    // Dashboard
    Route::get('/dashboard', fn() => Inertia::render('User/Dashboard'))->name('dashboard');

    // Downloads
    Route::get('/downloads', fn() => Inertia::render('User/Downloads'))->name('downloads');

    // Orders
    Route::get('/orders', fn() => Inertia::render('User/Orders'))->name('orders');

    // Licenses
    Route::get('/licenses', fn() => Inertia::render('User/Licenses'))->name('licenses');

    // Support
    Route::get('/support', fn() => Inertia::render('User/Support'))->name('support');

    // Profile Settings
    Route::get('/profile', fn() => Inertia::render('User/Profile'))->name('profile');

    // Affiliate
    Route::get('/affiliate', fn() => Inertia::render('User/Affiliate'))->name('affiliate');

    // Notifications
    Route::get('/notifications', fn() => Inertia::render('User/Notifications'))->name('notifications');

    // User-prefixed public pages (same pages but under /user prefix for logged-in users)
    Route::get('/blog', fn() => Inertia::render('Blog'))->name('blog');
    Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
    Route::get('/agency-bundle', fn() => Inertia::render('AgencyBundle'))->name('agency-bundle');
    Route::get('/pricing', fn() => Inertia::render('Pricing'))->name('pricing');
    Route::get('/about', fn() => Inertia::render('About'))->name('about');

    // Resources
    Route::get('/documentation', fn() => Inertia::render('Documentation'))->name('documentation');
    Route::get('/community', fn() => Inertia::render('Community'))->name('community');
    Route::get('/tutorials', fn() => Inertia::render('Tutorials'))->name('tutorials');

    // Products
    Route::get('/products/postx', fn() => Inertia::render('Products/PostX'))->name('products.postx');
    Route::get('/products/wowstore', fn() => Inertia::render('Products/WowStore'))->name('products.wowstore');
    Route::get('/products/wowrevenue', fn() => Inertia::render('Products/WowRevenue'))->name('products.wowrevenue');
    Route::get('/products/wowaddons', fn() => Inertia::render('Products/WowAddons'))->name('products.wowaddons');
    Route::get('/products/wholesalex', fn() => Inertia::render('Products/WholesaleX'))->name('products.wholesalex');
    Route::get('/products/wowoptin', fn() => Inertia::render('Products/WowOptin'))->name('products.wowoptin');
    Route::get('/products/wowshipping', fn() => Inertia::render('Products/WowShipping'))->name('products.wowshipping');
    Route::get('/products/wowapps', fn() => Inertia::render('Products/WowApps'))->name('products.wowapps');

    // Legal pages
    Route::get('/privacy-policy', fn() => Inertia::render('PrivacyPolicy'))->name('privacy-policy');
    Route::get('/terms-conditions', fn() => Inertia::render('TermsConditions'))->name('terms-conditions');
    Route::get('/refund-policy', fn() => Inertia::render('RefundPolicy'))->name('refund-policy');
    Route::get('/faq', fn() => Inertia::render('FAQ'))->name('faq');
});

// Redirect old dashboard to new user dashboard
Route::get('/dashboard', function () {
    return redirect()->route('user.dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile API routes (for form submissions)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin Routes
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    // Dashboard
    Route::get('/dashboard', fn() => Inertia::render('Admin/Dashboard'))->name('dashboard');

    // Products Management
    Route::get('/products', fn() => Inertia::render('Admin/Products'))->name('products');

    // Orders Management
    Route::get('/orders', fn() => Inertia::render('Admin/Orders'))->name('orders');

    // Users Management
    Route::get('/users', fn() => Inertia::render('Admin/Users'))->name('users');

    // Licenses Management
    Route::get('/licenses', fn() => Inertia::render('Admin/Licenses'))->name('licenses');

    // Support Tickets
    Route::get('/support', fn() => Inertia::render('Admin/Support'))->name('support');

    // Reports & Analytics
    Route::get('/reports', fn() => Inertia::render('Admin/Reports'))->name('reports');

    // Settings
    Route::get('/settings', fn() => Inertia::render('Admin/Settings'))->name('settings');
});

// Redirect /admin to admin dashboard
Route::get('/admin', function () {
    return redirect()->route('admin.dashboard');
})->middleware(['auth', 'admin']);

require __DIR__.'/auth.php';
