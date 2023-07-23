import { combineReducers, configureStore } from '@reduxjs/toolkit';
import localforage from 'localforage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { orderReducer } from '../features/burger-constructor';

const persistConfig = {
  key: 'root',
  storage: localforage,
};

const rootReducer = combineReducers({
  order: orderReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  // fix error: non-serializable values in the state
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
