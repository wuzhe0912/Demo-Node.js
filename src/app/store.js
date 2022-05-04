import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
console.log(123, counterReducer);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
