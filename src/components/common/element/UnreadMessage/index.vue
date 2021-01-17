<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "UnreadMessage",
  props: {
    unreadMessageNumber: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
  setup(props) {
    const unreadMessageNumber = ref<number>(props.unreadMessageNumber);
    return {
      unreadMessageNumber
    };
  },
});
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>