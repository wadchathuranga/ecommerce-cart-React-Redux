import { apiSlice } from "./apiSlice";

const API = 'https://fakestoreapi.com/products';

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        fetchProducts: builder.mutation({
            query: () => ({
                url: API,
                method: 'GET',
            })
        }),
    })
});

export const { useFetchProductsMutation } = productsApiSlice; 