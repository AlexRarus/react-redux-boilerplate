import { createSelector } from 'reselect';
import { RootState } from 'src/store';

export const statusSelector = createSelector(
  (state: RootState) => state.application.status,
  (status: any) => status
);

export const mapStateToProps = (state: RootState, ownProps: any) => ({
  status: statusSelector(state),
});
