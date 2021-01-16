<script lang="ts">
import { defineComponent, ref } from "vue";
import { store } from "@/store"

export default defineComponent({
    name: "Loading",
    setup () {
        const isLoading = ref<boolean>(store.state.isLoading);
        return {
            isLoading
        }
    }
});
</script>
<template src="./index.html"></template>
<style src="./index.css" scoped></style>