import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import lockerReducer from "./lockerSlice";
import { authReducer } from "./authSlice";
import userSlice from "./userSlice";


const rootReducer = combineReducers({
    Auth: authReducer,
    Locker: lockerReducer,
    User: userSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

