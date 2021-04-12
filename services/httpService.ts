import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://hardbas.azurewebsites.net/',
    });
  }

  get = <T>(url: string, params?: unknown, config?: AxiosRequestConfig) => {
    return this.instance.get<T>(url, {
      params,
      ...config,
    });
  };

  post = <T = {}>(url: string, body: unknown, config?: AxiosRequestConfig) => {
    return this.instance.post<T>(url, body, {
      ...config,
    });
  };
}

export default new HttpService();
