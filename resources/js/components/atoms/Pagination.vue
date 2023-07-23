<script setup lang="ts">
interface PropsInterface {
    links: {
        first: string;
        last?: string;
        next?: string;
        prev?: string;
    };
}

const props = defineProps<PropsInterface>();

const emit = defineEmits<{
    (e: "prev", prev: string): void;
    (e: "next", next: string): void;
}>();

function previousPage() {
    if (!props.links.prev) {
        return;
    }
    emit("prev", props.links.prev);
}

function nextPage() {
    if (!props.links.next) {
        return;
    }
    emit("next", props.links.next);
}
</script>

<template>
    <nav class="flex items-center gap-6">
        <button
            type="button"
            @click="previousPage"
            class="bg-indigo-700 p-2 text-white"
            :disabled="!props.links.prev"
        >
            Previous
        </button>
        <button
            type="button"
            @click="nextPage"
            class="bg-indigo-700 p-2 text-white"
            :disabled="!props.links.next"
        >
            Next
        </button>
    </nav>
</template>
