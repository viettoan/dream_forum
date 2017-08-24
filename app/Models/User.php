<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'birthday',
        'phone',
        'employment',
        'address',
        'hobby',
        'study_at',
        'relationship_status',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function actions()
    {
        return $this->hasMany(Action::class);
    }

    public function roles()
    {
        return $this->hasMany('role_user', 'user_id', 'id');
    }

    public function relations()
    {
        return $this->belongsToMany(User::class, 'relations', 'user_id', 'relation_id');
    }

    public function friends()
    {
        return $this->belongsToMany(User::class, 'friends', 'user_id', 'friend_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function media()
    {
        return $this->hasOne(Media::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
