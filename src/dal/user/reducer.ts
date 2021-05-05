import { createReducer } from '@reduxjs/toolkit';

import { loginAction, logoutAction } from './actions';
import { IUser } from './interfaces';

interface IUserState {
  isLoading: boolean;
  user: IUser;
}

const guest: IUser = {
  username: 'guest',
};

const initialState: IUserState = {
  isLoading: false,
  user: guest,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.user = guest;
    })
    .addCase(logoutAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(logoutAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = guest;
    })
    .addCase(logoutAction.rejected, (state, action) => {
      state.isLoading = false;
    });
});
