<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "@/store";
import { LoadingModule } from "@/store/modules/loading";

export default defineComponent({
    name: "Loading",
    setup () {
        const isLoading = ref<boolean>(LoadingModule.isLoading);
        return {
            isLoading
        }
    }
});
</script>
<template src="./index.html"></template>
<style lang='scss' src='./index.scss' scoped>
</style>