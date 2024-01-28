import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    status: null,
}

const productListSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
});

export const { } = productListSlice.actions

export default productListSlice.reducer