<template src="./index.html">
</template>

<script lang = 'ts'>
import { defineComponent, onMounted, reactive, ref } from "vue";
import Header from "@/components/common/Header/index.vue";
import Front from "@/components/common/Front/index.vue";
import Content from "@/components/common/Content/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    "H-header": Header,
    "H-content": Content,
    "H-front": Front,
  },
  setup() {
    let list: [] = [];
    let lockReconnect: boolean = false;
    let socket: WebSocket;
    const createWebSocket = () => {
       try {
        // 创建Web Socket 连接
        socket = new WebSocket("ws://127.0.0.1:8080/ws/1");
        // 初始化事件
        initEventHandle();
      } catch (e) {
        // 出错时重新连接
        reconnect();
      }
    };
    const closeWebSocket = () => {
      socket.close();
    };
    const initEventHandle = () => {
      // 连接关闭时触发
      socket.onclose = () => {
        console.log("连接关闭");
      };
      // 通信发生错误时触发
      socket.onerror = () => {
        // 重新创建长连接
        reconnect();
      };
      // 连接建立时触发
      socket.onopen = () => {
        console.log("连接成功");
      };
      // 客户端接收服务端数据时触发
      socket.onmessage = msg => {
        console.log(msg+"--------------------------")
        // 业务逻辑处理
        list = msg.data;
        console.log("连接成功", msg);
      };
    };
    const reconnect = () => {
 if (lockReconnect) {
        return;
      }
      lockReconnect = true;
      // 没连接上会一直重连，设置延迟避免请求过多
      setTimeout(() => {
        lockReconnect = false;
        createWebSocket();
      }, 2000);
    }
    return {
      list, createWebSocket,closeWebSocket
    };
  },
});
</script>

<style src="./index.scss" lang='scss' scoped>
</style>