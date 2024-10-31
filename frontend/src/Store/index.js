import { configureStore } from '@reduxjs/toolkit'
import productionReducer from './ProductionRoutes.js'
import authReducer from './auth.js';
const store = configureStore({
    reducer: {
    prodReducer: productionReducer,
    authRedu:authReducer
  }
});

export default store;
