import BaseService from '../base.service';
import { Response } from '@/domain/services/base.response';
import { queryUIScriptList, runUIScript } from '@/api/script';
import { Code } from '@/store/modules/type';

/**
 * UI脚本服务
 */
class UIScriptService extends BaseService {

    /**
     * 查询UI脚本列表
     * @returns 
     */
    queryUIScriptListService(): Promise<Response<Code[]>> {
        return this.get<{}, Response<Code[]>>(
            queryUIScriptList,{}
        );
    };

    /**
     * 查询UI脚本列表
     * @returns 
     */
     runUIScriptService(lang: string, code: String): Promise<Response<string>> {
        return this.post<{}, Response<string>>(
            runUIScript,{"lang": lang, "code": code}
        );
    };
}

let instance;
export default (() => {
    if (instance) return instance;
    instance = new UIScriptService();
    return instance;
})();