import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/api';

import { ACTION_TYPES } from './constants';
import { ISettings } from './interfaces';

export const getSettingsAction = createAsyncThunk(ACTION_TYPES.GET_THEME, async () => {
  const response = await API.settings.getSettings();
  return response.data;
});

export const saveSettingsAction = createAsyncThunk(
  ACTION_TYPES.UPDATE_THEME,
  async (data: ISettings) => {
    const response = await API.settings.updateSettings(data);
    return response.data;
  }
);
