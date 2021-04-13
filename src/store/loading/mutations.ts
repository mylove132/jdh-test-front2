import { IState } from "@/config/types/store.dto";
import { SET_LOADING } from "./actiontypes";

export default {
    [SET_LOADING](state: IState, isLoading: boolean): void {
        state.isLoading = isLoading;
    }
}