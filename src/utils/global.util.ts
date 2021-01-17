import { store } from "@/store"
import { SET_LOADING } from "@/store/actiontypes"

export class GlobalUtil {

    showError(err: string): void {

    }

    showLoading(): void {
        store.dispatch(SET_LOADING, true);
    }

    closeLoading(): void {
        store.dispatch(SET_LOADING, false)
    }

    static getKeyCode = (e: KeyboardEvent): number => {
        if (e.key !== undefined) {
            return Number(e.key)
        }
        return e.keyCode;
    }

}

export default {
    GlobalUtil
}