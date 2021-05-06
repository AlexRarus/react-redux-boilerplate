import { createReducer } from '@reduxjs/toolkit';
import { ITheme } from 'src/components/palette/interfaces';

import { changeThemeAction } from './actions';

export interface IThemePageState {
  theme: ITheme;
}

const initialState: IThemePageState = {
  theme: {
    color: '',
    background: '',
  },
};

export default createReducer(initialState, (builder) => {
  builder.addCase(changeThemeAction, (state, action) => {
    state.theme = action.payload;
  });
});
