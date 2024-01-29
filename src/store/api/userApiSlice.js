import { apiSlice } from "./apiSlice";

// const USER_URL = '/api/users';

const TEST_AUTH_API = 'https://fakestoreapi.com/auth/login';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                // url: `${USER_URL}/auth`,
                url: TEST_AUTH_API,
                method: 'POST',
                body: data,
            })
        }),
        // logout: builder.mutation({
        //     query: () => ({
        //         url: `${USERS_URL}/logout`,
        //         method: 'POST',
        //     }),
        // }),
        // signup: builder.mutation({
        //     query: (data) => ({
        //         url: `${USERS_URL}/signup`,
        //         method: 'POST',
        //         body: data,
        //     }),
        // }),
        // updateUser: builder.mutation({
        //     query: (data) => ({
        //         url: `${USERS_URL}/profile`,
        //         method: 'PUT',
        //         body: data,
        //     }),
        // }),
    })
});

export const {
    useLoginMutation,
    useLogoutMutation,
    useSignupMutation,
    useUpdateUserMutation,
} = usersApiSlice; 