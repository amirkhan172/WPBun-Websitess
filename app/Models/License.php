<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class License extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'product_id',
        'order_id',
        'license_key',
        'status',
        'activations',
        'max_activations',
        'purchased_at',
        'expires_at',
        'revoked_at',
        'revoke_reason',
    ];

    protected $casts = [
        'activations' => 'integer',
        'max_activations' => 'integer',
        'purchased_at' => 'datetime',
        'expires_at' => 'datetime',
        'revoked_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($license) {
            if (empty($license->license_key)) {
                $license->license_key = self::generateKey();
            }
            if (empty($license->purchased_at)) {
                $license->purchased_at = now();
            }
        });
    }

    /**
     * Generate a unique license key
     */
    public static function generateKey(): string
    {
        $segments = [];
        for ($i = 0; $i < 4; $i++) {
            $segments[] = strtoupper(Str::random(4));
        }
        return implode('-', $segments);
    }

    /**
     * User who owns this license
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Product this license is for
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Order this license was generated from
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Activations for this license
     */
    public function licenseActivations(): HasMany
    {
        return $this->hasMany(LicenseActivation::class);
    }

    /**
     * Check if license is expired
     */
    public function isExpired(): bool
    {
        return $this->expires_at && $this->expires_at->isPast();
    }

    /**
     * Check if license can be activated
     */
    public function canActivate(): bool
    {
        return $this->status === 'active'
            && !$this->isExpired()
            && $this->activations < $this->max_activations;
    }

    /**
     * Revoke the license
     */
    public function revoke(string $reason = null)
    {
        $this->update([
            'status' => 'revoked',
            'revoked_at' => now(),
            'revoke_reason' => $reason,
        ]);

        // Deactivate all activations
        $this->licenseActivations()->update([
            'is_active' => false,
            'deactivated_at' => now(),
        ]);
    }

    /**
     * Reset activations
     */
    public function resetActivations()
    {
        $this->licenseActivations()->update([
            'is_active' => false,
            'deactivated_at' => now(),
        ]);

        $this->update(['activations' => 0]);
    }

    /**
     * Scope for active licenses
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Scope for expired licenses
     */
    public function scopeExpired($query)
    {
        return $query->where('expires_at', '<', now());
    }
}
