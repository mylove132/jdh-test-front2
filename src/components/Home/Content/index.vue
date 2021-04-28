<template src="./index.html"></template>

<script lang="ts">
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { useJavaCode, userLocalStorage } from "@/hooks";
import { Code } from "@/store/modules/type";
import { computed, defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "Content",
  components: {},
  setup() {
    const { addJavaCode } = useJavaCode();
    const { getLocalStorage } = userLocalStorage();
    let codeList = computed(() => {
        return JSON.parse(getLocalStorage(JAVA_CODE_LIST_LOCAL_KEY));
      });
    function copyCode () {
      addJavaCode({
         name: "请输入名称",
         code: "请输入代码",
         desc: "请输入描述",
         theme: "请选择样式"
       })
    }
    return {
      codeList,
      copyCode
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped>
</style>
