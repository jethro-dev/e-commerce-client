import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity = state.products.length;
      let total = 0;
      for (let i = 0; i < state.products.length; i++) {
        total += state.products[i].price * state.products[i].quantity;
      }

      state.total = total;
    },
    removeAllProducts: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    removeProduct: (state, action) => {
      state.products.splice(action.payload, 1);
      state.quantity = state.products.length;
      let total = 0;
      for (let i = 0; i < state.products.length; i++) {
        total += state.products[i].price * state.products[i].quantity;
      }

      state.total = total;
    },
  },
});

export const { addProduct, removeAllProducts, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
