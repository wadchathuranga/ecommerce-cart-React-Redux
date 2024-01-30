import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    // status: null,
};

// export const productsFetch = createAsyncThunk(
//     "products/productsFetch",
//     async () => {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         if (response.length) return response;
//     }
// );

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
});

export const { setItems } = productsSlice.actions;

export default productsSlice.reducer;
