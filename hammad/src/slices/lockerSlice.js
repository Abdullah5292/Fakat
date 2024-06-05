import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lockers: [],
    selectlocker: null,
};

const lockerSlice = createSlice({
    name: "locker",
    initialState,
    reducers: {
        setLockers: (state, action) => {
            state.lockers = action.payload;
        },
        selectLocker: (state, action) => {
            state.selectlocker = action.payload;
        },
        addlocker: (state, action) => {
            state.lockers.push(action.payload);
        },
        removelocker: (state, action) => {
            state.lockers = state.lockers.filter((locker) => locker.id !== action.payload);
        },
        updatelocker: (state, action) => {
            const index = state.lockers.findIndex((locker) => locker.id === action.payload.id);
            state.lockers[index] = action.payload;
        }
    },
});

export const { setLockers, selectLocker, addlocker, removelocker, updatelocker } = lockerSlice.actions;
export default lockerSlice.reducer;
