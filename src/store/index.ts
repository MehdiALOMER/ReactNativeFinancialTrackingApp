import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';
import globalReducer from './reducers/globalReducer';
import transactionReducer from './reducers/transactionReducer';
import budgetReducer from './reducers/budgetReducer';
import authReducer from './reducers/authReducer';


const store = configureStore({
  reducer: {
    loadingReducer,
    globalReducer,
    transactionReducer,
    budgetReducer,
    authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Uyarı eşiğini artırın veya false değeri ile kontrolü tamamen devre dışı bırakın
        warnAfter: 100, // Örneğin, eşiği 100ms'ye çıkarın
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;