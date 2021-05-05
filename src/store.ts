import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import { createRootReducer } from './root-reducer';

export const history = createBrowserHistory();

const myRouterMiddleware = routerMiddleware(history);

const preloadedState = {};

export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === 'production') {
      return getDefaultMiddleware().prepend(thunk, myRouterMiddleware);
    } else {
      return getDefaultMiddleware()
        .prepend(thunk, myRouterMiddleware)
        .concat(
          createLogger({
            collapsed: true,
            colors: {
              title: () => 'inherit',
              prevState: () => '#9E9E9E',
              action: () => '#03A9F4',
              nextState: () => '#4CAF50',
              error: () => '#F20404',
            },
          })
        );
    }
  },
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: [],
});
export type RootState = ReturnType<typeof store.getState>;
