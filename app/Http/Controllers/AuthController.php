<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Route;
use App\Contracts\Repositories\UserRepository;

class AuthController extends Controller
{
    protected $user;

    public function __construct(UserRepository $user)
    {
        $this->user = $user;
    }
    public function register(Request $request)
    {
        $response = [
            'error' => false,
            'data' => [],
            'message' => '',
            'status' => 200,
        ];
        $input = [
            'name' => $request->input('user.name'),
            'email' => $request->input('user.email'),
            'password' => bcrypt($request->input('user.password')),
        ];
        
        $user = $this->user->store($input);
        $data['user'] = $user->name;

        $param = [
            'grant_type' => 'password',
            'client_id' => env('API_PASSWORD_CLIENT_ID'),
            'client_secret' => env('API_PASSWORD_CLIENT_SECRET'),
            'username' => $request->input('user.email'),
            'password' => $request->input('user.password'),
            'scope' => '*',
        ];

        $request->request->add($param);
        $proxy = Request::create('oauth/token', 'POST');
        $data['token'] = json_decode(Route::dispatch($proxy)->getContent());
        $response['data'] = $data;
        $response['message'] = 'Created !';
        $response['error'] = false;
        $response['status'] = 201;

        return response()->json($response, $response['status']);
    }
    
    public function login(Request $request)
    {
        $response = [
        	'error' => false,
        	'data' => [],
        	'message' => '',
        	'status' => 200
        ];
        $input = [
            'email' => $request->input('user.email'),
            'password' => $request->input('user.password')
        ];

        if (!Auth::attempt($input)) {
        	$response['error'] = true;
        	$response['message'] = 'Email or password are incorrect!';
        	$response['status'] = 403;
        	return response()->json($response, $response['status']);
        }

        $data['user'] = $request->input['user.email'];
        $param = [
        	'grant_type' => 'password',
        	'client_id' => env('API_PASSWORD_CLIENT_ID'),
        	'client_secret' => env('API_PASSWORD_CLIENT_SECRET'),
        	'username' => $request->input('user.email'),
            'password' => $request->input('user.password'),
        	'scope' => '*',
        ];

        $request->request->add($param);
        $proxy = Request::create('oauth/token', 'POST');
        $data['token'] = json_decode(Route::dispatch($proxy)->getContent());
        $response['data'] = $data;
        $response['message'] = 'Login successfully!';
        $response['status'] = 200;
        return response()->json($response, $response['status']);
    }
}
