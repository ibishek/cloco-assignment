<script setup lang="ts">
import Header from "@/templates/Header.vue";
import Nav from "@/templates/Nav.vue";
</script>

<template>
    <Header />
    <div class="mt-6 space-y-6 px-8">
        <Nav />
        <router-view></router-view>
    </div>
</template>
