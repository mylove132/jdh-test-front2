let lockReconnect: boolean = false;
let ws: WebSocket;
function useWebsocket(handleMessage: Function){
    const init = () => {
        bindEvent();
    }
    function createWebSocket(){
        ws = new WebSocket("");
    }
    const bindEvent = () => {
        ws.addEventListener('open', handleOpen, false);
        ws.addEventListener('close', handleClose, false);
        ws.addEventListener('open', handleError, false);
        ws.addEventListener('open', handleMessage(), false);
    }

    function handleOpen (e: Event) {
        console.log("建立连接");
    }
    
    function handleClose (e: Event) {
        console.log("关闭连接");
    }
    
    function handleError (e: Event) {
        console.log("链接出错");
    }
    function reconnect() {
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
    init();
}

export default useWebsocket;