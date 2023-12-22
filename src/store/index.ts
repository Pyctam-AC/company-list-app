import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companies.slice';
import employeeReducer from './employee.slice';

export const store = configureStore({
  reducer: {
    company: companyReducer,
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
