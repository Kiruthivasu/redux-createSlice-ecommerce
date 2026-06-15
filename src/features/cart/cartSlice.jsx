import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  total: 0,
};


const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      state.items.push(action.payload);

      state.total += action.payload.price;

    },


    removeFromCart: (state, action) => {

      const item = state.items.find(
        item => item.id === action.payload
      );


      state.items = state.items.filter(
        item => item.id !== action.payload
      );


      state.total -= item.price;

    }

  }

});


export const {
  addToCart,
  removeFromCart

} = cartSlice.actions;


export default cartSlice.reducer;