<template src="./index.html"></template>

<script lang="ts">
import {
  defineComponent,
  ref
} from "vue";

export default defineComponent({
  name: "Header",
  components: {
  },
  setup() {
    const loading = ref<boolean>(true);
   
    return {
      loading,
    };
  },
});
</script>

<style src="./index.scss" lang="scss" scoped>
</style>
