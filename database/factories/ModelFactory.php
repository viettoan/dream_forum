<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Post::class, function (Faker\Generator $faker) {
    return [
        'user_id' => function () {
                return App\Models\User::pluck('id')
                    ->random(1)
                    ->first();
            },
        'category_id' => function () {
                return App\Models\Category::pluck('id')
                    ->random(1)
                    ->first();
            },
        'caption' => $faker->text(255),
        'content' => $faker->text(1000),
        'avatar' => 'huonggiang.jpg',
    ];
});
