<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            'name' => 'Viet Toan',
            'email' => 'viettoan290696@gmail.com',
            'password' => bcrypt('snsdgg09')
        ];

        User::create($user);
    }
}
