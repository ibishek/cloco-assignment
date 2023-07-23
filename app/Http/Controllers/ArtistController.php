<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtistIndexResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArtistController extends Controller
{
    public function index()
    {
        $artists = DB::table('artists')->select('name', 'slug')->simplePaginate(10);
        return ArtistIndexResource::collection($artists);
    }
}
