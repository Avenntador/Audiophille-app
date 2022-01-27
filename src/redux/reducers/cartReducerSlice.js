import { createSlice } from "@reduxjs/toolkit";

export const cartReducerSlice = createSlice({
    name: 'cart',
    initialState: {
        productsArray: [],
    },

    reducers: {
        addToCartCounter: (state, payload) => {
            
        },
        removeItemFromCartCounter: (state, payload) => {
            
        }
    }
});

export const { addToCartCounter, removeItemFromCartCounter } = cartReducerSlice.actions;

// export const selectCartItemCounter = state => state.cart.cartItemCounter;

export default cartReducerSlice.reducer;