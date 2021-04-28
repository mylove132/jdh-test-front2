import { LoadingModule } from "@/store/modules/loading";

export class GlobalUtil {

    showError(err: string): void {

    }

    static showLoading(): void {
        LoadingModule.dispatchReduce(true);
    }

    static closeLoading(): void {
        LoadingModule.dispatchReduce(false);
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