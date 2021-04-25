import { IState } from "@/domain/type/state";
import { Commit } from "vuex";
import { SET_WS_DATA } from "./actiontypes";
import { WsData } from "./type";

interface Ictx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_WS_DATA]( {commit}: Ictx, wsData: WsData ): void {
        commit(SET_WS_DATA, wsData);
    }
}