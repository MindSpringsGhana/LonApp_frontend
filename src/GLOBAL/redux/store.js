// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import formReducer from './slice/formSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});
