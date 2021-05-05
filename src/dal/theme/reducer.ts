import { createReducer } from '@reduxjs/toolkit';

import { getThemeAction, saveThemeAction } from './actions';
import { ITheme } from './interfaces';

interface IThemeState {
  isLoading: boolean;
  theme: ITheme;
}

const defaultTheme: ITheme = {
  color: 'black',
  background: 'white',
};

const initialState: IThemeState = {
  isLoading: false,
  theme: defaultTheme,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getThemeAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getThemeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.theme = action.payload;
    })
    .addCase(getThemeAction.rejected, (state, action) => {
      state.isLoading = false;
    })
    .addCase(saveThemeAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(saveThemeAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.theme = action.payload;
    })
    .addCase(saveThemeAction.rejected, (state, action) => {
      state.isLoading = false;
    });
});
