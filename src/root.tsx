import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DevTools from 'src/containers/dev-tools';
import App from 'src/app';

export default function Root() {
  return (
    <Switch>
      <Route path="/" render={() => <App />} />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </Switch>
  );
}
