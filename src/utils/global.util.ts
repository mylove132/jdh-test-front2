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

    static arrRemoveJson<T>(arr: T[], attr: string, value: any): T[] {
        if (!arr || arr.length == 0) {
            return []
          }
          let newArr = arr.filter((item: T, index: number) => {
              return item != value;
          })    
          return newArr;
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