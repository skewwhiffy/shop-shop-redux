import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import productReducer from './slice/product';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
})