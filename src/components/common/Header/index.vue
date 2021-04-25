<template src="./index.html"></template>

<script lang="ts">
import {
  defineComponent,
  ref
} from "vue";
import RadioButton from "@/components/common/element/RadioButton/index.vue"
import Logo from "@/components/common/Header/Logo/index.vue"
import Theme from "@/components/common/Header/Theme/index.vue"
import SuspensionButton from "@/components/common/element/SuspensionButton/index.vue"
import SuspensionButtonEntity from "@/domain/components/suspension"

export default defineComponent({
  name: "Header",
  components: {
    "v-radio-button": RadioButton,
    "v-suspension-button": SuspensionButton,
    "v-logo": Logo,
    "v-theme": Theme,
  },
  setup() {
    const loading = ref<boolean>(true);
    const homeSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "/user",
      "el-icon-edit"
    );
    const testSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "el-icon-user"
    );
    const caseSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "el-icon-search"
    );
    const autoSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "el-icon-delete"
    );
    const pageSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "el-icon-phone-outline"
    );
    const suspensionButtons: SuspensionButtonEntity[] = [
      homeSuspensionButtonData,
      testSuspensionButtonData,
      caseSuspensionButtonData,
      autoSuspensionButtonData,
      pageSuspensionButtonData,
    ];
    return {
      suspensionButtons,
      loading,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped>
</style>
