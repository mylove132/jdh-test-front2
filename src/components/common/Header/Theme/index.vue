<script lang='ts'>
import { defineComponent, ref } from "vue";
import UnreadMessage from '@/components/common/element/UnreadMessage/index.vue';
import RollingGear from '@/components/common/element/RollingGear/index.vue';

export default defineComponent({
  name: "Theme",
  components : {
      "unread-message": UnreadMessage,
      "rolling-gear": RollingGear
  },
  setup(){
    const username = ref<string>('liuzhanhui');
    return {
      username
    }
  }  
})
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>