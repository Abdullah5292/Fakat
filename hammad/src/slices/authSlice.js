import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    Password: null,
    isLoggedIn: false,
    token: null,

};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;


