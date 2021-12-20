import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    cartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartOpen = true
      state.cart = [...state.cart, action.payload]
    },
    addMultipleToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload]
    },
    updateCartQuantity: (state, action) => {
      /*
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };
      */
    },
    removeFromCart: (state, action) => {
      /*
    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };
      */
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
/*
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen
      };
      */
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