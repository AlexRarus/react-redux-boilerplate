import { createReducer } from '@reduxjs/toolkit';

import { getSettingsAction, saveSettingsAction } from './actions';
import { ISettings } from './interfaces';

interface ISettingsState {
  isLoading: boolean;
  settings: ISettings | null;
}

const initialState: ISettingsState = {
  isLoading: false,
  settings: null,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getSettingsAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getSettingsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.settings = action.payload;
    })
    .addCase(getSettingsAction.rejected, (state, action) => {
      state.isLoading = false;
    })
    .addCase(saveSettingsAction.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(saveSettingsAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.settings = action.payload;
    })
    .addCase(saveSettingsAction.rejected, (state, action) => {
      state.isLoading = false;
    });
});
