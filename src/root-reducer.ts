import { combineReducers } from '@reduxjs/toolkit';
import application from 'src/app/reducer';
import settingsDal from 'src/dal/settings/reducer';
import themeDal from 'src/dal/theme/reducer';
import theme from 'src/containers/theme/reducer';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: any) =>
  combineReducers({
    application,
    // reducers - dal
    settingsDal,
    themeDal,
    // reducers - containers
    theme,
    router: connectRouter(history),
  });
