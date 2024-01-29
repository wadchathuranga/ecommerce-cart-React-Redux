import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    status: null,
}

const productListSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingIndex = state.cart.findIndex((prod) => prod.id === item.id);
            if (existingIndex) {
                state.cart[existingIndex] = {
                    ...state.cart[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                }
            } else {
                let tempProductItem = { ...item, cartQuantity: 1 };
                state.cart.push(tempProductItem);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        }
    }
});

export const { addToCart } = productListSlice.actions

export default productListSlice.reducer