import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { store, history } from './store';
import Root from './root';
import { GlobalStyleApp } from './style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleApp />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
