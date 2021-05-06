import { createSelector } from 'reselect';
import { RootState } from 'src/store';
import { ITheme } from 'src/components/palette/interfaces';

export const themeSelector = createSelector(
  (state: RootState) => state.themeDal.theme,
  (state: RootState) => state.theme.theme,
  (themeDal: ITheme, theme: ITheme): ITheme => ({
    color: theme.color || themeDal.color,
    background: theme.background || themeDal.background,
  })
);

export const mapStateToProps = (state: RootState, ownProps: any) => ({
  theme: themeSelector(state),
});
