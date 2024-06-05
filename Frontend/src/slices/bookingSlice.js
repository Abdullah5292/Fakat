// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     bookings: [],
//     selectbooking: null,
// };

// const bookingSlice = createSlice({
//     name: "booking",
//     initialState,
//     reducers: {
//         setBookings: (state, action) => {
//             state.bookings = action.payload;
//         },
//         selectBooking: (state, action) => {
//             state.selectbooking = action.payload;
//         },
//         addBooking: (state, action) => {
//             state.bookings.push(action.payload);
//         },
//         removeBooking: (state, action) => {
//             state.bookings = state.bookings.filter((booking) => booking.id !== action.payload);
//         },
//         updateBooking: (state, action) => {
//             const index = state.bookings.findIndex((booking) => booking.id === action.payload.id);
//             state.bookings[index] = action.payload;
//         },
//     },
// });

// export const { setBookings, selectBooking, addBooking, removeBooking, updateBooking } = bookingSlice.actions;
// export default bookingSlice.reducer;

