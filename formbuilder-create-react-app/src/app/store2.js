import { configureStore } from '@reduxjs/toolkit';
import compIDToDeleteReducer from '../features/counter/newSlice';

export default configureStore({
  reducer: {
    compIDToDelete: compIDToDeleteReducer,
  },
});
