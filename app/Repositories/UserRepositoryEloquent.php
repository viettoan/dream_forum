<?php
namespace App\Repositories;

use App\Contracts\Repositories\UserRepository;
use App\Models\User;

class UserRepositoryEloquent extends AbstractRepositoryEloquent implements UserRepository
{
	public function model()
    {
        return new User;
    }
	public function store($data = [])
	{
		$user = $this->model()->create($data);

		return $user;
	}
} 