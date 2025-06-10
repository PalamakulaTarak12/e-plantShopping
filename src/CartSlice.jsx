import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Add product to cart items array
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Implement remove functionality here
    },
    updateQuantity: (state, action) => {
      // Implement update quantity functionality here
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
