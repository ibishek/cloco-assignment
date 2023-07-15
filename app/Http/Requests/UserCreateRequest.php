<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'min:2', 'max:25'],
            'last_name' => ['required', 'string', 'min:2', 'max:55'],
            'email' => ['required', 'unique:users,email', 'email'],
            'gender' => ['required', Rule::in(['m', 'f', 'o'])],
            'password' => ['required', 'confirmed'],
            'password_confirmation' => ['required'],
            'phone' => ['nullable', 'digits_between:8,14']
        ];
    }
}
