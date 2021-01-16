<template src="./index.html"></template>

<script lang = 'ts'>
import { defineComponent } from "vue";
import Header from "@/components/common/Header/index.vue";
import Front from "@/components/common/Front/index.vue";

export default defineComponent ({
    name: "Home",
    components : {
        Header,
        Front
    },
    setup () {
        
    }
})
</script>

<style src="./index.scss" lang='scss' scoped>
</style>