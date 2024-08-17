<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'date_naissance' => 'required|date',
            'telephone' => 'required|string|max:20',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'date_naissance' => 'required|date',
            'telephone' => 'required|string|max:20',
            'password' => $validated['password'],
        ]);

        return response()->json($user);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid login credentials.'], 401);
        }

        $token = $request->user()->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token]);
    }
}
