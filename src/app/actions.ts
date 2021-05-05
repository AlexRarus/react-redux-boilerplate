import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/api';

import { ACTION_TYPES } from './constants';

export const initAction = createAsyncThunk(ACTION_TYPES.START_APPLICATION, async () => {
  const response = await API.settings.getSettings();
  return response.data;
});
