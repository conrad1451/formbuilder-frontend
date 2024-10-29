import { configureStore } from '@reduxjs/toolkit';
import compIDToDeleteReducer from '../features/counter/deleteComponentSlice';

export default configureStore({
  reducer: {
    compIDToDelete: compIDToDeleteReducer,
  },
});
