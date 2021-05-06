<template src="./index.html">
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"
import Header from "@/components/Home/Header/index.vue"
import Content from "@/components/Home/Content/index.vue"
import Sidebar from "@/components/Home/Sidebar/index.vue"
import Front from "@/components/Home/Fron/index.vue"
export default defineComponent({
  name: "Home",
  components: {
    "H-header": Header,
    "H-content": Content,
    "H-sidebar": Sidebar,
    "H-front": Front
  },
  setup() {
    let list: [] = [];
    return {
      list
    };
  },
});
</script>

<style src="./index.scss" lang='scss' scoped>

</style>