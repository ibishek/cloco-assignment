<?php

namespace App\Http\Controllers;

use App\Enums\UserTypeEnum;
use App\Http\Requests\AdminCreateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function register(AdminCreateRequest $request)
    {
        $slug =  User::getSlug(new User, $request->first_name, $request->last_name);

        $created = DB::statement('INSERT into users(first_name, last_name, slug, email, password, gender, role, created_at, updated_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)', [$request->first_name, $request->last_name, $slug, $request->email, Hash::make($request->password), $request->gender, UserTypeEnum::Admin->value, now(), now()]);

        if ($created) {
            return response()->json([], 204);
        }

        return response()->json([
            'message' => 'Unable to create admin user'
        ], 400);
    }
}
