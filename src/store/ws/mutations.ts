import { IState } from "@/domain/type/state";
import { SET_WS_DATA } from "./actiontypes";
import { WsData } from "./type";

export default {
    [SET_WS_DATA](state: IState, wsData: WsData): void {
        state.wsData = wsData;
    }
}