<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Theme",
  setup(){
      const changeTheme = (theme: string):void => {
          window.document.documentElement.setAttribute('data-theme', theme);
      }
      return {
          changeTheme
      }
  }  
})
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>