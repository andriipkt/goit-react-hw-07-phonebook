import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

const customMiddleware = state => {
  return next => {
    return action => {
      return next(action);
    };
  };
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDef => getDef(customMiddleware),
});
