const e = require('express');
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

   username: {
        type: String,
        required: true
    },
    StartDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    Booking_Status: {
        type: String,
        enum: ['Approved', 'Cancelled', "Pending Payment", "Renewed"], 
    },
    User_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    Locker_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lockers'
    },
    Locker_Status: {
        type: String,
        enum: ['Available', 'Reserved', 'Not Available'],
        ref : 'Lockers'
    }
    });

const Bookings = mongoose.model('Bookings', BookingSchema);
module.exports = Bookings;
