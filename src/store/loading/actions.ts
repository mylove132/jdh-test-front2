import { Commit } from "vuex";
import { IState } from "@/config/types/store.dto";
import { SET_LOADING } from "./actiontypes";

interface Ictx {
    commit: Commit;
    state: IState;
}

export default {
    [SET_LOADING]( {commit}: Ictx, isLoading: boolean ): void {
        commit(SET_LOADING, isLoading);
    }
}