
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HTTP_STATUS } from "@/common/contants/http";  //返回状态枚举
import { GlobalUtil } from '@/utils/global.util';

axios.defaults.timeout = 6000;
axios.defaults.baseURL = process.env.baseUrl;

export default class Request {

  private loading_axios: AxiosInstance = axios.create();
  private globaUtil: GlobalUtil = new GlobalUtil();

  constructor() {
    this.init();
  }

  private init(): void {
    this.add_interceptors(this.loading_axios);
  }

  private add_interceptors(requestObj: AxiosInstance): void {
    requestObj.interceptors.request.use((options: AxiosRequestConfig): AxiosRequestConfig => {
      this.globaUtil.showLoading();
      return options;
    }, (err: any): Promise<string> => {
      return this.outer_status_response_interceptors(err)
    });
    requestObj.interceptors.response.use((response: AxiosResponse): AxiosResponse | Promise<any> => {
      this.globaUtil.closeLoading();
      return this.inside_status_response_interceptors(response);
    }, (err: any): Promise<string> => {
      this.globaUtil.closeLoading();
      return this.outer_status_response_interceptors(err)
    })
  }

  private outer_status_response_interceptors(error: any): Promise<string> {
    const { response = {} } = error;
    return Promise.reject(response.statusText || (error && error.toString()) || "未知错误");
  }

  private inside_status_response_interceptors(response: AxiosResponse): AxiosResponse | Promise<string> {
    const { data } = response;
    return data.code === HTTP_STATUS.SUCCESS ? response : Promise.reject(data.msg);
  }

  private last_status_response_interceptors(err: string, action: boolean): Promise<string> {
    (err && action) && this.globaUtil.showError(err);
    return Promise.reject(err)
  }

  public async loading_post<T>(url: string, data: T): Promise<AxiosResponse | string> {
    return await this.loading_axios.post(url, data).then((res: AxiosResponse): Promise<AxiosResponse> => Promise.resolve(res)).catch((err: string): Promise<string> => this.last_status_response_interceptors(err, true));
  }

  public async loading_get<T>(url: string, data: T): Promise<AxiosResponse | string> {
    return await this.loading_axios.get(url, { params: data }).then((res: AxiosResponse): Promise<AxiosResponse> => Promise.resolve(res)).catch((err: string): Promise<string> => this.last_status_response_interceptors(err, true));
  }
}
