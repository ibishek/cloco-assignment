<?php

namespace App\Http\Controllers;

use App\Enums\UserTypeEnum;
use App\Http\Requests\UserCreateRequest;
use App\Http\Resources\UserIndexResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = DB::table('users')->where('role', UserTypeEnum::User->value)->simplePaginate(10);
        return UserIndexResource::collection($users);
    }

    public function show(string $slug)
    {
        if ($user = DB::table('users')->where('slug', $slug)->first()) {
            return $user;
        }

        return response()->json([
            'message' => 'User not found'
        ], 404);
    }

    public function store(UserCreateRequest $request)
    {
        $slug = User::getSlug(new User, $request->first_name, $request->last_name);

        try {
            DB::transaction(function() use($request, $slug){
                $user = User::class;
            });

            return response()->json([], 204);
        } catch(\Exception $e) {
            return response()->json([
                'message' => 'Unable to create user'
            ], 400);
        }
    }

    public function update()
    {}

    public function destroy()
    {}
}
