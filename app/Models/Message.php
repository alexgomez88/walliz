<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Casts\Attribute;


class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'content', 'message_id', 'user_id'
    ];

    protected $casts = [
        'content' => AsArrayObject::class,
    ];

    protected $appends = ['author', 'threads'];

    public function author(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->user,
        );
    }

    public function threads(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->messages,
        );
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function messages(): HasMany
    {
        return $this->HasMany(Message::class);
    }
}
