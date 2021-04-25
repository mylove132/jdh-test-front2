<template src="./index.html">
</template>

<script lang = 'ts'>
import { defineComponent } from "vue"
import Header from "@/components/common/Header/index.vue"
import Front from "@/components/common/Front/index.vue"
import Content from "@/components/common/Content/index.vue"
import { useWebsocket } from '@/hooks'
import { IHandleMessage } from "@/hooks/useWebsocket"
export default defineComponent({
  name: "Home",
  components: {
    "H-header": Header,
    "H-content": Content,
    "H-front": Front,
  },
  setup() {
    let list: [] = [];
    const useWs = useWebsocket();
    const ws: WebSocket = useWs.createWebSocket("/ws/1");
    function handleMessage(): IHandleMessage {
      const handleMessage = (message: any) =>{
        console.log("------------------------")
        console.log(message);
      }
      return {handleMessage};
    }
    useWs.bindEvent(ws, handleMessage());
    return {
      list
    };
  },
});
</script>

<style src="./index.scss" lang='scss' scoped>

</style>