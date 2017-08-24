<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function roles()
    {
        return $this->hasMany('permission_role', 'permission_id', 'id');
    }

    public function users()
    {
        return $this->hasMany('role_user', 'role_id', 'id');
    }
}
