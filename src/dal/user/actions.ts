import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'src/api';

import { ACTION_TYPES } from './constants';

export const loginAction = createAsyncThunk(
  ACTION_TYPES.LOGIN,
  async (data: { login: string; password: string }) => {
    const response = await API.user.login(data);
    return response.data;
  }
);

export const logoutAction = createAsyncThunk(ACTION_TYPES.LOGOUT, async () => {
  const response = await API.user.logout();
  return response.data;
});
