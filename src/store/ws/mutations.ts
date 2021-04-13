import { IState, WsData } from "@/config/types/store.dto";
import { SET_WS_DATA } from "./actiontypes";

export default {
    [SET_WS_DATA](state: IState, wsData: WsData): void {
        state.wsData = wsData;
    }
}