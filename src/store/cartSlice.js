import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
}

const productListSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingIndex = state.cartItems.findIndex((prod) => prod.id === item.id);
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    quantity: state.cartItems[existingIndex].quantity + 1,
                }
                toast.info("Increased product quantity");
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
                toast.success("Product added to cart");
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItems.find(
                (item) => item.id === itemId
            );
            if (item) {
                item.quantity++;
            }
            // localStorage.setItem("cartItems", JSON.stringify(item));
        },
        drecreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItems.find(
                (item) => item.id === itemId
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
            // localStorage.setItem("cartItems", JSON.stringify(item));
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        },
    }
});

export const { addToCart, deleteItem, clearCart, drecreaseQuantity, increaseQuantity } = productListSlice.actions

export default productListSlice.reducer