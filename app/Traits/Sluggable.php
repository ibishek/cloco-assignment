<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

trait Sluggable
{
    /**
     * Generate slug to a model
     */
    public static function getSlug(Model $model, ...$args): string
    {
        $table = $model->table ?? $model->getTable();

        $initialSlug = implode("-", array_map(fn($arg) => strtolower($arg), $args));

        $slugExits = DB::table($table)->select(DB::raw('COUNT(slug) as slugCount'))->first();

        if ($slugExits->slugCount === 0) {
            return $initialSlug;
        }

        return $initialSlug . '-' . strtolower(Str::random(6));
    }
}