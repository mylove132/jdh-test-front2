<template src="./index.html"></template>

<script lang="ts">
import { useJavaCode } from "@/hooks";
import { JavaCodeModule } from "@/store/modules/javacode";
import { computed, defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "Content",
  components: {},
  setup() {
    const { addJavaCode } = useJavaCode();
    function copyCode () {
      addJavaCode({
         name: "请输入名称",
         code: "请输入代码",
         desc: "请输入描述",
         theme: "请选择样式"
       })
    }
    return {
      codeList: computed(() => {
        return JavaCodeModule.codeList;
      }),
      copyCode
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped>
</style>
