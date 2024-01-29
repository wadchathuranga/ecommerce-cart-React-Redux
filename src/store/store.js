import { configureStore } from '@reduxjs/toolkit';
import { allReducers } from './reducers';
import { apiSlice } from './api/apiSlice';


const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    // devTools: true,
});

export default store;