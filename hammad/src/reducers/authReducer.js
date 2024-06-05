import { LOGIN, LOGOUT } from "../actions/actionTypes";

const initialState = {
    isLoggedIn: false,
    username: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.email,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: null,
            };

        default:
            return state;
    }
};