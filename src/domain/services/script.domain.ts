/**
 * 脚本接口数据
 */
interface ScriptPojo {
    scriptId?: number;
    scriptName: string;
    threadNum: number;
    stressTime: number;
    fileMd5: string;
    status?: boolean;
}

/**
 * 上传脚本接口数据
 */
interface UploadScriptPojo {
    name: string;
    md5: string;
}

export {
    ScriptPojo,
    UploadScriptPojo
}