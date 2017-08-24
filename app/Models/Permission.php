<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function roles()
    {
        return $this->hasMany('permission_role', 'permission_id', 'id');
    }
}
