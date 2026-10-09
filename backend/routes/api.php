<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Tulis API-mu di bawah sini, contoh:
// Route::middleware('auth:sanctum')->group(function () {
//     Route::apiResource('clients', ClientController::class);
// });
