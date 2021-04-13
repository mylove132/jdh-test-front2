import { ScriptDto } from '@/dto/services/script.dto';
import BaseService from '../base.service';
import { Response } from '@/dto/services/base.response';
import { UploadDto } from '@/dto/services/upload.dto';


class ScriptService extends BaseService {

    /**
     * 查询脚本
     * @param scriptId 
     * @returns 
     */
    queryScriptById(scriptId: number): Promise<Response<ScriptDto>> {
        return this.get<{}, Response<ScriptDto>>(
            "script/"+scriptId,{}
        );
    };

    /**
     * 脚本文件上传
     * @param params 
     * @param headers 
     * @returns 
     */
    jmxFileUpload(params: FormData, headers: {}): Promise<Response<UploadDto>> {
        return this.postForHeaders<FormData, Response<UploadDto>>("script/upload", params, headers);
    }

    /**
     * 保存脚本
     * @param script 
     * @returns 
     */
    saveScript(script: ScriptDto): Promise<Response<boolean>>{
        return this.post<ScriptDto, Response<boolean>>(
            "/script/add", script
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