import { configureStore } from '@reduxjs/toolkit';
import compIDReducer from '../features/counter/questionComponentSlice';

export default configureStore({
  reducer: {
    compID: compIDReducer,
  },
});
