import { createAction } from '@reduxjs/toolkit';
import { ITheme } from 'src/components/palette/interfaces';

import { ACTION_TYPES } from './constants';

export const changeThemeAction = createAction<ITheme>(ACTION_TYPES.CHANGE_THEME);
