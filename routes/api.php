<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\InitialUserResource;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AdminController::class, 'register'])->middleware([HandlePrecognitiveRequests::class]);

Route::middleware('auth:sanctum')->group(function() {
    Route::get('user', function (Request $request) {
        return new InitialUserResource($request->user());
    });

    Route::prefix('artists')->group(function() {
        Route::get('/', [ArtistController::class, 'index']);
        Route::post('/', [ArtistController::class, 'store']);
        Route::get('{slug}', [ArtistController::class, 'show']);
        Route::put('{slug}', [ArtistController::class, 'update']);
        Route::delete('{slug}', [ArtistController::class, 'destroy']);
    });

    Route::prefix('users')->group(function() {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('{slug}', [UserController::class, 'show']);
        Route::put('{slug}', [UserController::class, 'update']);
        Route::delete('{slug}', [UserController::class, 'destroy']);
    });
});
