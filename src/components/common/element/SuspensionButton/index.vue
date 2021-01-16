
<script lang="ts">
import { defineComponent, reactive } from "vue";
import SuspensionButtonEntity from "@/common/dto/suspension";

export default defineComponent({
  name: "SuspensionButton",
  props: {
    suspensionButtonData: {
      type: SuspensionButtonEntity,
      default: () => {},
    },
  },
  setup(props) {
    const suspensionButtonData = reactive<SuspensionButtonEntity>(
      props.suspensionButtonData
    );
    console.log(suspensionButtonData);
    const href: string =
      suspensionButtonData.getHref == null ? "" : suspensionButtonData.getHref;
    const icon: string =
      suspensionButtonData.getIcon == null ? "" : suspensionButtonData.getIcon;
    const text: string =
      suspensionButtonData.getText == null ? "" : suspensionButtonData.getText;
    return {
      href,
      icon,
      text,
    };
  },
});
</script>

<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>