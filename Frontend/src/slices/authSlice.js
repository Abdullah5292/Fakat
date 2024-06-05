import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: localStorage.getItem('isLoggedIn') === 'true',
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    role: localStorage.getItem('role') || '',

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('role', action.payload.role);
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = null;
            state.token = null;
            state.role = null;
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('role');

        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;


