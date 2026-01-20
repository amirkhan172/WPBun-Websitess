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

// Authenticated Routes
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
