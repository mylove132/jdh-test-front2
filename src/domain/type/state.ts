import { Code } from "@/store/modules/type";

export interface IState {
    isLoading: boolean;
    wsData: {};
    codeList: Code[];
}