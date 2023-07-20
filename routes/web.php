<?php

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login'])->middleware([HandlePrecognitiveRequests::class]);
Route::post('logout', [AuthController::class, 'logout']);

Route::get('login', function() {
    return view('welcome');
})->name('login');

Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '(.*)');