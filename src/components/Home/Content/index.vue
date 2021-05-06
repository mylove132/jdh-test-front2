<template src="./index.html"></template>

<script lang="ts">
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { useJavaCode, userLocalStorage } from "@/hooks";
import { computed, defineComponent, reactive, ref } from "vue";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/ext-language_tools";
import { Code } from "@/store/modules/type";
export default defineComponent({
  name: "Content",
  components: {
    VAceEditor,
  },
  setup() {
    // 脚本初始样式
    const theme = ref<string>("cobalt");
    // 脚本初始语言
    const lang = ref<string>("java");

    const { addJavaCode } = useJavaCode();
    const { getLocalStorage } = userLocalStorage();
    let codeList = computed(() => {
      const localCodeList = getLocalStorage(JAVA_CODE_LIST_LOCAL_KEY);
      if (localCodeList === null) {
        return [
          {
            name: "",
            code: "请输入代码",
            lang: "java",
            desc: "",
          },
        ];
      } else {
        return JSON.parse(localCodeList);
      }
    });
    function copyCode(item: Code) {
      addJavaCode(item);
    }
    function delScript(item: Code) {

    }
    
    return {
      lang,
      theme,
      themeList: [
        {
          value: "chrome",
          label: "chrome",
        },
        {
          value: "cobalt",
          label: "cobalt",
        },
        {
          value: "ambiance",
          label: "ambiance",
        },
        {
          value: "chaos",
          label: "chaos",
        },
        {
          value: "clouds",
          label: "clouds",
        },
        {
          value: "clouds_midnight",
          label: "clouds_midnight",
        },
        {
          value: "crimson_editor",
          label: "crimson_editor",
        },
        {
          value: "dawn",
          label: "dawn",
        },
        {
          value: "dracula",
          label: "dracula",
        },
        {
          value: "dreamweaver",
          label: "dreamweaver",
        },
        {
          value: "eclipse",
          label: "eclipse",
        },
        {
          value: "github",
          label: "github",
        },
        {
          value: "god",
          label: "god",
        },
        {
          value: "gruvbox",
          label: "gruvbox",
        },
        {
          value: "idle_fingers",
          label: "idle_fingers",
        },
        {
          value: "iplastic",
          label: "iplastic",
        },
        {
          value: "katzenmilch",
          label: "katzenmilch",
        },
        {
          value: "kr_theme",
          label: "kr_theme",
        },
         {
          value: "kuroir",
          label: "kuroir",
        },
         {
          value: "merbivore",
          label: "merbivore",
        },
         {
          value: "merbivore_soft",
          label: "merbivore_soft",
        },
         {
          value: "mono_industrial",
          label: "mono_industrial",
        },
         {
          value: "monokai",
          label: "monokai",
        },
         {
          value: "nord_dark",
          label: "nord_dark",
        },
         {
          value: "one_dark",
          label: "one_dark",
        },
         {
          value: "tomorrow_night_eighties",
          label: "tomorrow_night_eighties",
        },
      ],
      langList: [
        {
          value: "java",
          label: "java",
        },
        {
          value: "python",
          label: "python",
        },
        {
          value: "javascript",
          label: "javascript",
        },
      ],
      editorOptions: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableAutoIndent: true,
        tabSize: 2,
        fontSize: 16,
        showPrintMargin: false, //去除编辑器里的竖线
      },
      codeList,
      copyCode,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
