import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'src/app';

export default function Root() {
  return (
    <Switch>
      <Route path="/" render={() => <App />} />
    </Switch>
  );
}
