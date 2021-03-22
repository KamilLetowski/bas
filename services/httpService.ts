import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpService {
  private instance: AxiosInstance = null;

  constructor() {
    this.instance = axios.create({
      baseURL: '',
    });
  }

  get = (url: string, params?: unknown, config?: AxiosRequestConfig) => {
    return this.instance.get(url, {
      params,
      ...config,
    });
  };
}

export default new HttpService();
