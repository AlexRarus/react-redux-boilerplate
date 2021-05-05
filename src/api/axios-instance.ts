import axios, { AxiosInstance } from 'axios';

export type { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/',
  validateStatus: (status) => status >= 200 && status < 400,
  timeout: 60000,
});
