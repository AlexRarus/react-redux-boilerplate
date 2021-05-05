import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/api';

import { ACTION_TYPES } from './constants';
import { ITheme } from './interfaces';

export const getThemeAction = createAsyncThunk(ACTION_TYPES.GET_THEME, async () => {
  const response = await API.theme.getTheme();
  return response.data;
});

export const saveThemeAction = createAsyncThunk(ACTION_TYPES.UPDATE_THEME, async (data: ITheme) => {
  const response = await API.theme.updateTheme(data);
  return response.data;
});
