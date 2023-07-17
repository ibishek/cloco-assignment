<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface ButtonPropsInterface {
    grow: boolean;
    secondary: boolean;
}

const props = withDefaults(defineProps<ButtonPropsInterface>(), {
    grow: false,
    secondary: false,
});

const classes = computed<string>(() => {
    let style: string = "";
    if (props.grow) {
        style = `${style} w-full`;
    }
    if (props.secondary) {
        style = `${style} border border-b-4 border-indigo-700 bg-white text-indigo-700 hover:bg-indigo-50`;
    }
    if (!props.secondary) {
        style = `${style} bg-indigo-700 text-white hover:bg-indigo-900`;
    }
    return style;
});
</script>

<template>
    <button class="px-4 py-3" :class="classes">
        <slot></slot>
    </button>
</template>
