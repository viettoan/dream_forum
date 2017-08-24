<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    protected $fillable = [
        'name',
        'description',
    ];

    public function media()
    {
        return $this->belongsTo(Media::class);
    }

    public function action()
    {
        return $this->belongsTo(Action::class);
    }

    public function relation()
    {
        return $this->belongsTo('relations', 'type_id');
    }
}
