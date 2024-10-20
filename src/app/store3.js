import { configureStore } from '@reduxjs/toolkit';
import inputTextReducer from '../features/counter/inputTextSlice';

export default configureStore({
  reducer: {
    inputText: inputTextReducer,
  },
});
