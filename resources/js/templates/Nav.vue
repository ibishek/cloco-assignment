<script setup lang="ts">
const navItems = [
    {
        name: "User",
        link: { name: "user-index" },
    },
    {
        name: "Artist",
        link: { name: "artist-index" },
    },
];
</script>

<template>
    <nav class="border border-gray-100 bg-gray-50 py-4 shadow-sm">
        <ul>
            <li
                class="inline-flex"
                v-for="({ name, link }, index) in navItems"
                :key="index"
            >
                <router-link
                    :to="link"
                    class="px-8 py-1 text-gray-700 hover:bg-gray-50"
                    exact-active-class="bg-gray-100"
                    >{{ name }}</router-link
                >
            </li>
        </ul>
    </nav>
</template>
