<template src="./index.html"></template>

<script lang="ts">
import { defineComponent } from "vue";
import RadioButton from "@/components/common/element/RadioButton/index.vue";
import Logo from "@/components/common/Header/Logo/index.vue";
import Theme from "@/components/common/Header/Theme/index.vue";
import SuspensionButton from "@/components/common/element/SuspensionButton/index.vue";
import { SuspensionButtonEntity } from "@/common/dto/index";

export default defineComponent({
  name: "Header",
  components: {
    "v-radio-button": RadioButton,
    "v-suspension-button": SuspensionButton,
    "v-logo": Logo,
    "v-theme": Theme,
  },
  setup() {
    const homeSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "/user",
      "fab fa-facebook-f"
    );
    const testSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "fab fa-weixin"
    );
    const caseSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "fab fa-tumblr-square"
    );
    const autoSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "fab fa-twitter"
    );
    const pageSuspensionButtonData: SuspensionButtonEntity = new SuspensionButtonEntity(
      "",
      "",
      "fab fa-weibo"
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
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
