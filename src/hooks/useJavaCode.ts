
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { Code } from "@/store/modules/type";
import { JavaCodeModule } from "@/store/modules/javacode";

import userLocalStorage, { IUseLocalStorage } from "./useLocalstorage";

export interface IUseJavaCode {
    addJavaCode: (code: Code) => void;
    delJavaCode: (code: Code) => void;
}

function useJavaCode(): IUseJavaCode {
    const addJavaCode = (code: Code): void => {
        const { setLocalStorage }: IUseLocalStorage = userLocalStorage();
        JavaCodeModule.dispatchAddReduce(code);
        setLocalStorage(JAVA_CODE_LIST_LOCAL_KEY, JSON.stringify(JavaCodeModule.codeList));
    }
    const delJavaCode = (code: Code): void => {
        const { setLocalStorage }: IUseLocalStorage = userLocalStorage();
        JavaCodeModule.dispatchDelReduce(code);
        setLocalStorage(JAVA_CODE_LIST_LOCAL_KEY, JSON.stringify(JavaCodeModule.codeList));
    }
    return {
        addJavaCode,
        delJavaCode
    }
}


export default useJavaCode;