<script lang='ts'>
import { defineComponent } from "vue";
import UnreadMessage from '@/components/common/element/UnreadMessage/index.vue';

export default defineComponent({
  name: "Theme",
  components : {
      "unread-message": UnreadMessage
  },
  setup(){
    
  }  
})
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>