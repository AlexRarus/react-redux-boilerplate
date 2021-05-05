import { AxiosResponse } from 'axios';

export interface IUserAPI {
  login(data: { login: string; password: string }): AxiosResponse<any>;
  logout(): AxiosResponse<any>;
}

const getConfig = () => ({
  login: (data: any) => ({
    url: `/login`,
    method: 'POST',
    data,
  }),
  logout: () => ({
    url: `/logout`,
    method: 'GET',
  }),
});

export default getConfig();
