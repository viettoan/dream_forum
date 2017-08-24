<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{

    protected $fillable = [
        'user_id',
        'post_id',
        'type_id',
        'parent_id',
        'value',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
