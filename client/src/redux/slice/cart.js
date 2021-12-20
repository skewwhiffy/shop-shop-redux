import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartOpen = true;
      state.cart = [...state.cart, action.payload];
    },
    addMultipleToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload];
    },
    updateCartQuantity: (state, action) => {
      state.cartOpen = true;
      state.cart = state.cart.map(product => {
        if (action.payload._id === product._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      })
    },
    removeFromCart: (state, action) => {
      const newState = state.cart.filter(product => {
        return product._id !== action.payload;
      });
      state.cartOpen = newState.length > 0;
      state.cart = newState;
    },
    clearCart: (state, action) => {
      /*
    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: []
      };
      */
    },
    toggleCart: (state, action) => {
      state.cartOpen = !state.cartOpen;
    }
  }
})

export const {
    addToCart,
    addMultipleToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;