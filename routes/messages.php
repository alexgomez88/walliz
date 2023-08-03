<?php

use App\Http\Controllers\MessagesController;
use Illuminate\Support\Facades\Route;

Route::resource('messages',  MessagesController::class);
