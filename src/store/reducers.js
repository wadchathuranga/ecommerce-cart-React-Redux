import { apiSlice } from "./api/apiSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productsSlice from "./productsSlice";

export const allReducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    products: productsSlice,
    cart: cartSlice,
}