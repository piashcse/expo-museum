import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { expoMuseumApi } from '@/src/redux/RTKQuery';

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [expoMuseumApi.reducerPath]: expoMuseumApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
      }).concat([expoMuseumApi.middleware]),
    devTools: process.env.NODE_ENV === 'development',
  });
  setupListeners(store.dispatch);
  return store;
};
export default configureAppStore;
