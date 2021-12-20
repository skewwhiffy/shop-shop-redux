import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/product';
import cartReducer from './slice/cart';
import categoryReducer from './slice/category';

export default configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
})