import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: localStorage.getItem('isLoggedIn') === 'true',
    token: localStorage.getItem('token') || '',
    role: localStorage.getItem('admin') || '',
    userDetails: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.token = action.payload.token;
            state.admin = action.payload.admin; // Directly set admin status

        },
        logout: (state) => {
            state.loggedIn = false;
            state.token = "";
            state.admin = false; // Reset admin status
            state.userDetails = initialState.userDetails;

        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const { login, logout, setUserDetails } = userSlice.actions;
export default userSlice.reducer;