<script setup lang="ts">
interface PropsInterface {
    type: string;
    modelValue: string | object;
}

const props = withDefaults(defineProps<PropsInterface>(), {
    type: "text",
});
</script>

<template>
    <input
        :type="props.type"
        class="border border-b-4 border-slate-200 px-4 py-3"
        v-model="props.modelValue"
        @input="$emit('input', ($event.target as HTMLInputElement).value)"
        @change="$emit('change', ($event.target as HTMLInputElement).value)"
    />
</template>
