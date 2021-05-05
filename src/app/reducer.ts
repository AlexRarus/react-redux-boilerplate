import { createReducer } from '@reduxjs/toolkit';

import { initAction } from './actions';

enum status {
  loading = 'loading',
  success = 'success',
  failed = 'failed',
}

export interface IApplicationState {
  status: status;
}

const initialState: IApplicationState = {
  status: status.loading,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(initAction.pending, (state, action) => {
      state.status = status.loading;
    })
    .addCase(initAction.fulfilled, (state, action) => {
      state.status = status.success;
    })
    .addCase(initAction.rejected, (state, action) => {
      state.status = status.failed;
    });
});
