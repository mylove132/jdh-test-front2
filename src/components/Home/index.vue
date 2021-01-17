<template src="./index.html"></template>

<script lang = 'ts'>
import { defineComponent } from "vue";
import Header from "@/components/common/Header/index.vue";
import Front from "@/components/common/Front/index.vue";
import Content from "@/components/common/Content/index.vue";

export default defineComponent ({
    name: "Home",
    components : {
        "H-header": Header,
        "H-content": Content,
        "H-front": Front
    },
    setup () {
        
    }
})
</script>

<style src="./index.scss" lang='scss' scoped>
</style>