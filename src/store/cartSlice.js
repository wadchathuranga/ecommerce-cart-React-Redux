import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

const initialState =
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };


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
            localStorage.setItem("cart", JSON.stringify(state));
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const exItemIndex = state.cartItems.findIndex(
                (item) => item.id === itemId
            );
            if (exItemIndex >= 0) {
                state.cartItems[exItemIndex] = {
                    ...state.cartItems[exItemIndex],
                    quantity: state.cartItems[exItemIndex].quantity + 1,
                }
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        drecreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const exItemIndex = state.cartItems.findIndex(
                (item) => item.id === itemId
            );
            if (exItemIndex.quantity !== 1) {
                state.cartItems[exItemIndex] = {
                    ...state.cartItems[exItemIndex],
                    quantity: state.cartItems[exItemIndex].quantity - 1,
                }
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
            localStorage.setItem("cart", JSON.stringify(state));
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem('cart');
        },
        // saveShippingAddress: (state, action) => {
        //     state.shippingAddress = action.payload;
        //     localStorage.setItem('cart', JSON.stringify(state));
        // },
        // savePaymentMethod: (state, action) => {
        //     state.paymentMethod = action.payload;
        //     localStorage.setItem('cart', JSON.stringify(state));
        // },
    }
});

export const { addToCart, deleteItem, clearCart, drecreaseQuantity, increaseQuantity } = productListSlice.actions

export default productListSlice.reducer