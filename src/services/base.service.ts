
import axios, {AxiosInstance, AxiosResponse} from "axios"
import { GlobalUtil } from "@/utils/global.util"
 
axios.defaults.timeout = 60000 ; // 设置全局请求超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASEURL // 设置全局请求基地址
 
export default class BaseService {
    private spinningAxios = axios.create(); // 建立请求时会产生全局Loading的axios实例
    private noSpinningAxios = axios.create(); // 建立请求时不会产生全局Loading的axios实例
 
    constructor() {
        this.addInterceptors(this.spinningAxios,true);
        this.addInterceptors(this.noSpinningAxios,false);
    }
 
    private addInterceptors(requestMain: AxiosInstance, loading: boolean): void {
        requestMain.interceptors.request.use(options => {
            // 对全局请求的options进行更改，例如增加动态头部信息等
            if(loading)
            {
                GlobalUtil.showLoading();
            }
            return options;
        },error => {
            // 错误捕捉 此时的错误为最外层status的错误
            return BaseService.outError(error,loading)
        })
        requestMain.interceptors.response.use(response => {
            // 处理全局请求的返回response，例如对返回值进行判断
            return BaseService.disposeResponse(response,loading)
        },error => {
            // 错误捕捉 此时的错误为最外层status的错误
            return BaseService.outError(error,loading)
        })
    }
 
    private static outError(error: any, loading: boolean): Promise<string> {
        if(loading)
        {
            GlobalUtil.closeLoading();
        }
        const { response = {} } = error;
        return Promise.reject(response.statusText || (error && error.toString()) || "未知错误");
    }
 
    private static disposeResponse(response: AxiosResponse, loading: boolean): AxiosResponse | Promise<any> {
        if(loading)
        {
            GlobalUtil.closeLoading();
        }
        // 对接口返回的数据进行判断，例如接口中 code 的值 200为成功，500为失败，401为未登录时进行各个操作，此处可以使用枚举
        const { data } = response;
        switch (data.code) {
            // case insideStatus.success:  // 200
            //     return response;
            // case insideStatus.error: // 500
            //     return Promise.reject(data.msg);
            // case insideStatus.noLogin: // 401
            //     this.utils.toLogin();
            //     return Promise.reject(data.msg);
            // default:
            //     return Promise.reject(data.msg);
            default: return response; //示例数据，请自行剔除
        }
    }
 
    public async post<T,S>(url: string, data: T): Promise<S> {
        return this.spinningAxios.post(url,data,{
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }

    public async postForHeaders<T,S>(url: string, data: T, headers: {}): Promise<S> {
        return this.spinningAxios.post(url,data, headers).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async get<T,S>(url: string, data: T): Promise<S> {
        return this.spinningAxios.get(url,{
            params: data,
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async postNoLoading<T,S>(url: string, data: T): Promise<S | string> {
        return this.noSpinningAxios.post(url,data,{
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
 
    public async getNoLoading<T,S>(url: string, data: T): Promise<S | string> {
        return this.noSpinningAxios.get(url,{
            params: data,
            // 添加例如 headers 之类的属性
        }).then(res => Promise.resolve(res.data)).catch(err => Promise.reject(err.toString()))
    }
}
 