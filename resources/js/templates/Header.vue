<script setup lang="ts">
import Button from "@/components/atoms/Button.vue";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";
import { useRouter } from "vue-router";

// @ts-expect-error
const name = import.meta.env.VITE_APP_NAME;

const useAuth = useAuthStore();
const router = useRouter();

function logout(): void {
    axios
        .post("/logout")
        .then((response) => {
            useAuth.deAuthenticate();
            router.replace({
                name: "login",
            });
        })
        .catch((error) => {
            throw Error(error);
        });
}
</script>

<template>
    <header class="flex items-center justify-between px-8 py-3 shadow-md">
        <h1 class="text-xl font-bold text-gray-700">{{ name }}</h1>
        <Button @click="logout" :secondary="true">Logout</Button>
    </header>
</template>
