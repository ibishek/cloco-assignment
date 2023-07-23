<script setup lang="ts">
import CenterCard from "@/components/atoms/CenterCard.vue";
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import Error from "@/components/atoms/Error.vue";
import { createToaster } from "@meforma/vue-toaster";
import { useForm } from "laravel-precognition-vue";
import { useRouter } from "vue-router";

const registerFrom = useForm("post", "/api/register", {
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
    password_confirmation: "",
});

const toast = createToaster();
const router = useRouter();

const register = () =>
    registerFrom
        .submit()
        .then((response) => {
            registerFrom.reset();
            router.push({
                name: "login",
            });
            toast.info("Admin user created successfully. Please, login");
        })
        .catch((error) => {
            toast.error(error.response.data?.message);
        });
</script>

<template>
    <CenterCard>
        <div class="max-w-2xl bg-white px-6 py-8 shadow-lg">
            <h1 class="text-center text-2xl font-bold text-gray-800">
                Register
            </h1>
            <form @submit.prevent="register" class="mt-4 space-y-4">
                <div class="space-y-2">
                    <Label for="first_name">First name:</Label>
                    <Input
                        id="first_name"
                        v-model="registerFrom.first_name"
                        placeholder="Jon"
                    />
                    <Error v-if="registerFrom.invalid('first_name')">
                        {{ registerFrom.errors.first_name }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="last_name">Last name:</Label>
                    <Input
                        id="last_name"
                        v-model="registerFrom.last_name"
                        placeholder="Doe"
                    />
                    <Error v-if="registerFrom.invalid('last_name')">
                        {{ registerFrom.errors.last_name }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="gender">Gender:</Label>
                    <div class="space-x-2">
                        <input
                            type="radio"
                            v-model="registerFrom.gender"
                            name="gender"
                            value="m"
                            id="male"
                        />
                        <label for="male" class="text-gray-700">Male</label>
                    </div>
                    <div class="space-x-2">
                        <input
                            type="radio"
                            v-model="registerFrom.gender"
                            name="gender"
                            value="f"
                            id="female"
                        />
                        <label for="female" class="text-gray-700">Female</label>
                    </div>
                    <div class="space-x-2">
                        <input
                            type="radio"
                            v-model="registerFrom.gender"
                            name="gender"
                            value="o"
                            id="other"
                        />
                        <label for="other" class="text-gray-700">Other</label>
                    </div>
                    <Error v-if="registerFrom.invalid('gender')">
                        {{ registerFrom.errors.gender }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        v-model="registerFrom.email"
                        placeholder="someone@one.com"
                    />
                    <Error v-if="registerFrom.invalid('email')">
                        {{ registerFrom.errors.email }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="password">Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        v-model="registerFrom.password"
                        placeholder="password"
                    />
                    <Error v-if="registerFrom.invalid('password')">
                        {{ registerFrom.errors.password }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="confirmPassword">Confirm password:</Label>
                    <Input
                        type="password"
                        id="confirmPassword"
                        v-model="registerFrom.password_confirmation"
                        placeholder="password"
                    />
                    <Error v-if="registerFrom.invalid('password_confirmation')">
                        {{ registerFrom.errors.password_confirmation }}
                    </Error>
                </div>
                <Button type="submit" grow>Register</Button>
            </form>
            <router-link
                :to="{
                    name: 'login',
                }"
                class="mt-6 block w-full border border-b-4 border-indigo-700 bg-white px-4 py-3 text-center text-indigo-700 hover:bg-indigo-50"
                >Have an account, Login</router-link
            >
        </div>
    </CenterCard>
</template>
