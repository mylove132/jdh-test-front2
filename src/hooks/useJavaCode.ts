
import { JAVA_CODE_LIST_LOCAL_KEY } from "@/domain/common";
import { Code } from "@/store/modules/type";
import { JavaCodeModule } from "@/store/modules/javacode";

import userLocalStorage, { IUseLocalStorage } from "./useLocalstorage";

export interface IUseJavaCode {
    addJavaCode: (code: Code) => void;
    delJavaCode: (code: Code) => void;
    updateJavaCode: (code: Code) => void;
}

function useJavaCode(): IUseJavaCode {
    const { setLocalStorage }: IUseLocalStorage = userLocalStorage();
    // 添加脚本进local
    const addJavaCode = (code: Code): void => {
        JavaCodeModule.dispatchAddReduce(code);
        setLocalStorage(JAVA_CODE_LIST_LOCAL_KEY, JSON.stringify(JavaCodeModule.codeList));
    }

    // local中删除脚本
    const delJavaCode = (code: Code): void => {
        JavaCodeModule.dispatchDelReduce(code);
        setLocalStorage(JAVA_CODE_LIST_LOCAL_KEY, JSON.stringify(JavaCodeModule.codeList));
    }

    // local中更新脚本
    const updateJavaCode = (code: Code): void => {
        console.log("***************"+code)
        JavaCodeModule.dispatchUpdateReduce(code);
        setLocalStorage(JAVA_CODE_LIST_LOCAL_KEY, JSON.stringify(JavaCodeModule.codeList));
    }
    return {
        addJavaCode,
        delJavaCode,
        updateJavaCode
    }
}


export default useJavaCode;