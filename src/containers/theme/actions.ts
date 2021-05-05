import { createAction } from '@reduxjs/toolkit';
import { ITheme } from 'src/dal/theme/interfaces';

import { ACTION_TYPES } from './constants';

export const changeThemeAction = createAction<ITheme>(ACTION_TYPES.CHANGE_THEME);
