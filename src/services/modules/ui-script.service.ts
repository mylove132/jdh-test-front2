import BaseService from '../base.service';
import { Response } from '@/domain/services/base.response';
import { queryUIScriptList } from '@/api/script';

/**
 * UI脚本服务
 */
class UIScriptService extends BaseService {

    /**
     * 查询UI脚本列表
     * @returns 
     */
    queryUIScriptById(): Promise<Response<UIScriptPojo[]>> {
        return this.get<{}, Response<UIScriptPojo[]>>(
            queryUIScriptList,{}
        );
    };
}

let instance;
export default (() => {
    if (instance) return instance;
    instance = new UIScriptService();
    return instance;
})();