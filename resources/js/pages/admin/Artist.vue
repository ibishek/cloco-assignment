<script setup lang="ts">
import Button from "@/components/atoms/Button.vue";
import Pagination from "@/components/atoms/Pagination.vue";
import axios, { AxiosResponse, AxiosError } from "axios";
import { ref, onMounted } from "vue";

interface ArtistInterface {
    name: string;
    slug: string;
}

interface PaginationInterface {
    first: string;
    last?: string;
    next?: string;
    prev?: string;
}

const isLoading = ref<boolean>(true);
const artists = ref<Array<ArtistInterface>>([]);
const pagination = ref<PaginationInterface>({
    first: "",
    last: "",
    next: "",
    prev: "",
});

function fetchArtist(url: string): void {
    axios
        .get(url)
        .then((response: AxiosResponse) => {
            artists.value = response.data.data;
            pagination.value = response.data.links;
            isLoading.value = false;
        })
        .catch((error: AxiosError) => {
            isLoading.value = false;
            console.log(error.response.data);
        });
}

onMounted(() => fetchArtist("/api/artists"));
</script>

<template>
    <div class="space-y-6">
        <div class="flex items-center justify-end">
            <Button>Add artist</Button>
        </div>
        <div v-if="isLoading" class="py-3 text-center">Loading ...</div>
        <table v-else class="w-full table-auto border-collapse">
            <thead class="border-y border-slate-100">
                <tr class="text-left">
                    <th class="w-8 p-4 font-semibold text-slate-400">S.N.</th>
                    <th class="p-4 font-semibold text-slate-400">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="artists.length < 1">
                    <td
                        colspan="3"
                        class="bg-gray-100 p-3 text-center text-gray-600"
                    >
                        No record found
                    </td>
                </tr>
                <tr
                    v-else
                    v-for="({ name, slug }, index) in artists"
                    :key="slug"
                >
                    <td
                        class="border-b border-slate-100 p-4 pl-8 text-slate-500"
                    >
                        {{ ++index }}
                    </td>
                    <td
                        class="border-b border-slate-100 p-4 pl-8 text-slate-500"
                    >
                        {{ name }}
                    </td>
                </tr>
            </tbody>
        </table>
        <Pagination
            :links="pagination"
            @next="(url) => fetchArtist(url)"
            @prev="(url) => fetchArtist(url)"
        />
    </div>
</template>
