<template src="./index.html">
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, onMounted, computed } from "vue";
import { ITheme, THEME_STYLE } from "@/common/types/theme";
import { store } from "@/store";
import { SET_THEME } from "@/store/actiontypes";
import { useTheme } from "@/hooks/index";
import { IThemeStyle } from "@/common/types/common";
import { IUseTheme } from "@/hooks/useTheme";
import RadioButton from "@/components/common/element/RadioButton/index.vue";
import SuspensionButton from "@/components/common/element/SuspensionButton/index.vue";
import { SuspensionButtonEntity } from '@/common/dto/index';
export default defineComponent({
  name: "Header",
  components: {
    RadioButton,
    SuspensionButton
  },
  setup() {
    const checked = ref<boolean>(false);
    const { addTheme, setThemeList, getThemeStyle }: IUseTheme = useTheme();
    const themeName = ref<string>("");
    const loading = ref<boolean>(true);
    const themeStyle = ref<THEME_STYLE>(THEME_STYLE.DEFAULT);
    const themeData = reactive<IThemeStyle>(getThemeStyle(themeStyle.value));
    const homeSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity("facebook","/user","fab fa-facebook-f");
    const testSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity("测试空间", "", "");
    const caseSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity("自动化");
    const autoSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity("用例管理");
    const pageSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity("页面管理");
    const suspensionButtons: SuspensionButtonEntity[] = [homeSuspensionButtonData, testSuspensionButtonData, caseSuspensionButtonData, autoSuspensionButtonData, pageSuspensionButtonData]; 

    const switchTheme = (theme: ITheme): void => {
      store.dispatch(SET_THEME, theme);
    };

    const addThemeStyle = (e: KeyboardEvent): void => {
      let code: number;
      // 兼容处理键盘事件
      if (e.key !== undefined) {
        code =  Number.parseInt(e.key);
      } else {
        code = e.keyCode;
      }
      if (code === 13 && themeName.value.trim().length) {
        const theme: ITheme = {
          id: new Date().getTime(),
          name: themeName.value,
          style: THEME_STYLE.DEFAULT,
        };
        addTheme(theme);
        themeName.value = "";
      }
    };
    watch(
      () => {
        return store.state.themes;
      },
      (themes: ITheme[]) => {
        setThemeList(themes);
      }
    );
    return {
      themes: computed(() => {
        return store.state.themes;
      }),
      suspensionButtons,
      loading
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped>

</style>
