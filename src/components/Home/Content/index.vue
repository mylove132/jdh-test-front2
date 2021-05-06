<template src="./index.html"></template>

<script lang="ts">
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { useJavaCode, userLocalStorage } from "@/hooks";
import { computed, defineComponent, ref } from "vue";
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
    let rqCodeList: Code[] = [];
    const { addJavaCode, delJavaCode, updateJavaCode } = useJavaCode();
    // 脚本初始样式
    const theme = ref<string>("cobalt");
    // 脚本初始语言
    const lang = ref<string>("java");

    // 请求UI脚本列表
    UIScriptService.queryUIScriptListService().then((response) => {
      if (response.code === 10000 && response.data != null) {
        rqCodeList = response.data;
        rqCodeList.forEach((code) => {
          addJavaCode(code);
        });
      }
    });

    // 获取local中脚本列表
    const { getLocalStorage } = userLocalStorage();
    const defaultCode: Code = {
      name: "",
      code: "",
      lang: "java",
      desc: "",
      theme: ""
    };

    // 计算local中脚本列表
    const codeList = computed(() => {
      const localCodeList = getLocalStorage(JAVA_CODE_LIST_LOCAL_KEY);
      if (localCodeList === null) {
        return [defaultCode];
      } else {
        return JSON.parse(localCodeList);
      }
    });

    // 复制脚本
    function copyCode(item: Code) {
      addJavaCode(item);
    }

    function changeLang(event: string, item: Code) {
      item.lang = event;
      updateJavaCode(item);
      console.log(item)
    }

    // 删除脚本
    function delScript(item: Code) {
      if (item.id !== null) {
        // todo 请求删除脚本
      }
      delJavaCode(item);
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
      changeLang
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
