<template src="./index.html"></template>

<script lang="ts">
import { useJavaCode } from "@/hooks";
import { defineComponent, onMounted, reactive, ref } from "vue";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/ext-language_tools";
import { Code } from "@/store/modules/type";
import UIScriptService from "@/services/modules/ui-script.service";

export default defineComponent({
  name: "Content",
  components: {
    VAceEditor,
  },
  setup() {
    // 脚本列表
    const { addJavaCode, delJavaCode, updateJavaCode } = useJavaCode();
    let state = reactive({
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
      codeList: reactive<Code[]>([])
    })
    const defaultCode: Code = {
      name: "",
      code: "",
      lang: "java",
      desc: "",
      theme: "",
    };
    onMounted(async() => {
      // 请求UI脚本列表
      const result = await UIScriptService.queryUIScriptListService();
      state.codeList = result.data ? result.data.filter((item,index)=>{
        item.theme = "cobalt";
        return item;
      }) : [defaultCode];
    });

    // 复制脚本
    function copyCode(item: Code) {
      addJavaCode(item);
    }

    function changeLang(event: string, item: Code) {
      item.lang = event;
      updateJavaCode(item);
      console.log(item);
    }

    // 删除脚本
    function delScript(item: Code) {
      if (item.id !== null) {
        // todo 请求删除脚本
      }
      delJavaCode(item);
    }

    return {
      state,
      copyCode,
      changeLang,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
