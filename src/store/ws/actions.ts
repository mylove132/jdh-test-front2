import { IState } from "@/common/types/common";
import { Commit } from "vuex";
import { SET_WS_DATA } from "./actiontypes";

interface Ictx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_WS_DATA]( {commit}: Ictx, wsData: WsData ): void {
        commit(SET_WS_DATA, wsData);
    }
}