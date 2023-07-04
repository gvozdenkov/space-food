import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../features/user';
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

const persistConfig = {
  key: 'root',
  storage: localforage,
};

const rootReducer = combineReducers({
  user: userReducer,
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
