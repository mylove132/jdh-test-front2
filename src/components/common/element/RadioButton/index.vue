<script lang="ts">
import { defineComponent, ref } from "vue"
export default defineComponent({
  name: "RadioButton",
  props:{
    checked:{
      type: Boolean,
      default: () => {
        return false;
      }
    }
  },
  setup(props){
    const checked = ref<boolean>(props.checked);
    return {
      checked
    }
  }
})
  
</script>
<template src="./index.html"></template>
<style src="./index.scss" lang="scss" scoped></style>