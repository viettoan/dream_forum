<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [
    'uses' => 'AuthController@register'
]);
Route::post('/login', [
	'uses' => 'AuthController@login'
]);
Route::get('/users', function (Request $request) {
    return response()->json(\App\Models\User::all());
})->middleware('auth:api');