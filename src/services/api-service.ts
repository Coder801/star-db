import axios, {
  AxiosInstance as IAxiosInstance,
  AxiosRequestConfig as IAxiosRequestConfig
} from "axios";

export default class ApiService {
  private instance: IAxiosInstance;

  public constructor({ baseURL, timeout, headers = {} }: IAxiosRequestConfig) {
    this.instance = axios.create({ baseURL, timeout, headers });
    this.instance.interceptors.response.use(
      response => {
        return Promise.resolve(response);
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  get = async (url: string, conf: object) => this.instance.get(url, conf);
}
