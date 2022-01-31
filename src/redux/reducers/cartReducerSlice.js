import { createSlice } from "@reduxjs/toolkit";

export const cartReducerSlice = createSlice({
    name: 'cart',
    initialState: {
        productsCart: {},
        
    },

    reducers: {
        addToCart: (state, cartItem) => {
            if (state.productsCart[cartItem.payload.id] === undefined) {
                state.productsCart[cartItem.payload.id] = cartItem.payload;
            }
        },

        incrementItemQuantity: (state, id) => {
            state.productsCart[id.payload]['itemQuantity']++;
        },

        decrementItemQuantity: (state, id) => {
            if (state.productsCart[id.payload]['itemQuantity'] === 1) {
                delete state.productsCart[id.payload];
                return;
            } else {
                state.productsCart[id.payload]['itemQuantity']--;
            }
        },

        removeAll: (state) => {
            state.productsCart = {};
        }
    }
});

export const { addToCart, removeAll, incrementItemQuantity, decrementItemQuantity } = cartReducerSlice.actions;

export const selectCartProductsCart = state => state.cart.productsCart;

export default cartReducerSlice.reducer;