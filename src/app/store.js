import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/dashboard/Component/listSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
  },
});
