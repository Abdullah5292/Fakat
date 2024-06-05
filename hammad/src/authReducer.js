// authReducer.js
import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false,
    email: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                email: action.payload.email,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                email: null,
            };

        default:
            return state;
    }
};