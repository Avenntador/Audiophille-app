import { configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "./reducers/cartReducerSlice";


export default configureStore({
    reducer: {
        cart: cartReducerSlice,
    }
});