import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { createSelector } from 'reselect';
import App from 'src/app';
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

export const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Root(props: PropsFromRedux) {
  const { theme } = props;

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" render={() => <App />} />
      </Switch>
    </ThemeProvider>
  );
}

export default connector(Root);
