import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import productReducer from './slice/product';
import cartReducer from './slice/cart';

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    cart: cartReducer,
  },
})