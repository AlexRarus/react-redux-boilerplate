import { AxiosResponse } from 'axios';
import { ISettings } from 'src/dal/settings/interfaces';

export interface ISettingsAPI {
  getSettings(): AxiosResponse<any>;
  updateSettings(data: ISettings): AxiosResponse<any>;
}

const getConfig = () => ({
  getSettings: () => ({
    url: `/settings`,
    method: 'GET',
  }),
  updateSettings: (data: ISettings) => ({
    url: `/settings`,
    method: 'POST',
    data,
  }),
});

export default getConfig();
