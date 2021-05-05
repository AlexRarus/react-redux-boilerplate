import { ISettingsAPI } from './endpoints/settings';
import { IUserAPI } from './endpoints/user';
import { IThemeAPI } from './endpoints/theme';

export interface IAPI {
  settings: ISettingsAPI;
  user: IUserAPI;
  theme: IThemeAPI;
}
