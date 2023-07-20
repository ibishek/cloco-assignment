<script setup lang="ts">
import CenterCard from "@/atoms/CenterCard.vue";
import Button from "@/atoms/Button.vue";
import Input from "@/atoms/Input.vue";
import Label from "@/atoms/Label.vue";
import Error from "@/atoms/Error.vue";
import { createToaster } from "@meforma/vue-toaster";
import { useForm } from "laravel-precognition-vue";
import { AxiosError } from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const loginForm = useForm("post", "/login", {
    email: "",
    password: "",
});

const router = useRouter();
const useAuth = useAuthStore();
const toast = createToaster();

const login = () =>
    loginForm
        .submit()
        .then((response) => {
            loginForm.reset();
            useAuth.fetchUser().then((success) => {
                router.push({
                    name: "dashboard",
                });
            });
        })
        .catch((error: AxiosError) => {
            // @ts-expect-error
            toast.error(error.response.data.message);
        });

function attemptToRedirect(): void {
    if (useAuth.isAuthenticated) {
        router.push({
            name: "admin-dashboard",
        });
    }
}

onMounted(() => setTimeout(attemptToRedirect, 500));
</script>

<template>
    <CenterCard>
        <div class="max-w-2xl bg-white px-6 py-8 shadow-lg">
            <h1 class="text-center text-2xl font-bold text-gray-800">Login</h1>
            <form @submit.prevent="login" class="mt-4 space-y-4">
                <div class="space-y-2">
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        id="email"
                        v-model="loginForm.email"
                        placeholder="someone@one.com"
                        autofocus
                    />
                    <Error v-if="loginForm.invalid('email')">
                        {{ loginForm.errors.email }}
                    </Error>
                </div>
                <div class="space-y-2">
                    <Label for="password">Password:</Label>
                    <Input
                        type="password"
                        id="password"
                        v-model="loginForm.password"
                        placeholder="password"
                    />
                    <Error v-if="loginForm.invalid('password')">
                        {{ loginForm.errors.password }}
                    </Error>
                </div>
                <Button type="submit" grow>Login</Button>
            </form>
            <div class="mt-4 space-y-4">
                <a href="javascript:void(0)">Forgot password?</a>
                <router-link
                    :to="{
                        name: 'register',
                    }"
                    class="block w-full border border-b-4 border-indigo-700 bg-white px-4 py-3 text-center text-indigo-700 hover:bg-indigo-50"
                    >Create an admin account</router-link
                >
            </div>
        </div>
    </CenterCard>
</template>
