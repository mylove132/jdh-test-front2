import { ScriptPojo, UploadScriptPojo } from '@/domain/services/script.domain';
import BaseService from '../base.service';
import { Response } from '@/domain/services/base.response';
import { addScript, queryScript, uploadScript } from '@/api/script';


class ScriptService extends BaseService {

    /**
     * 查询脚本
     * @param scriptId 
     * @returns 
     */
    queryScriptById(scriptId: number): Promise<Response<ScriptPojo>> {
        return this.get<{}, Response<ScriptPojo>>(
            queryScript + scriptId,{}
        );
    };

    /**
     * 脚本文件上传
     * @param params 
     * @param headers 
     * @returns 
     */
    jmxFileUpload(params: FormData, headers: {}): Promise<Response<UploadScriptPojo>> {
        return this.postForHeaders<FormData, Response<UploadScriptPojo>>(uploadScript, params, headers);
    }

    /**
     * 保存脚本
     * @param script 
     * @returns 
     */
    saveScript(script: ScriptPojo): Promise<Response<boolean>>{
        return this.post<ScriptPojo, Response<boolean>>(
            addScript, script
        )
    };

}

// 单列模式返回对象
let instance;
export default (() => {
    if (instance) return instance;
    instance = new ScriptService();
    return instance;
})();