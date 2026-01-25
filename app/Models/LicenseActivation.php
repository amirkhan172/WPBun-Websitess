<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LicenseActivation extends Model
{
    use HasFactory;

    protected $fillable = [
        'license_id',
        'domain',
        'ip_address',
        'machine_id',
        'is_active',
        'activated_at',
        'deactivated_at',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'activated_at' => 'datetime',
        'deactivated_at' => 'datetime',
    ];

    /**
     * License this activation belongs to
     */
    public function license(): BelongsTo
    {
        return $this->belongsTo(License::class);
    }

    /**
     * Deactivate this activation
     */
    public function deactivate()
    {
        $this->update([
            'is_active' => false,
            'deactivated_at' => now(),
        ]);

        // Decrement license activation count
        $this->license->decrement('activations');
    }

    /**
     * Scope for active activations
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }
}
