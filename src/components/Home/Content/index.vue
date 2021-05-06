<template src="./index.html"></template>

<script lang="ts">
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { useJavaCode, userLocalStorage } from "@/hooks";
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { VCodeMirror } from "vue3-code-mirror";
import { VAceEditor } from "vue3-ace-editor";

export default defineComponent({
  name: "Content",
  components: {
    VAceEditor
  },
  setup() {
    const state = reactive({
      content: "content text",
    });
    const { addJavaCode } = useJavaCode();
    const { getLocalStorage } = userLocalStorage();
    let codeList = computed(() => {
      const localCodeList = getLocalStorage(JAVA_CODE_LIST_LOCAL_KEY);
      if (localCodeList === null) {
        return [
          {
            name: "请输入名称",
            code: "请输入代码",
            desc: "请输入描述",
            theme: "请选择样式",
          },
        ];
      } else {
        return JSON.parse(localCodeList);
      }
    });
    function copyCode() {
      addJavaCode({
        name: "请输入名称",
        code: "请输入代码",
        desc: "请输入描述",
        theme: "请选择样式",
      });
    }
    return {
      state,
      codeList,
      copyCode,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
