const Users = require("../models/Users");
const Bookings = require("../models/Bookings");
const Lockers = require("../models/Lockers");
const moment = require('moment');
const nodemailer = require('nodemailer');
const transporter = require('../emailService.js'); 
const crypto = require('crypto'); 
const bcrypt = require("bcrypt");

var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken")
//Following will give booking details of the user, who has made the booking[another user can't see the booking details of another user]
router.get("/getbookingWithUser", async (req, res) => {
    try {
        const booking = await Bookings.findOne({ Booking_Id: req.body.Booking_Id })
        if (!booking) return res.json({ msg: "No Bookings Found" })
        //should i add a check here to see if the user is the same as the one who made the booking?
        const userId = req.user.userId; // Get the user ID from the request
        if (req.user.role === 'admin') { // how to seperate admin and user here? efficently?
            return res.json({ msg: "Booking Found", data: booking });
        }
        if (booking.user.userId !== userId) { // Check if the user ID in the booking does not match the user ID in the request
            return res.status(403).json({ error: 'Unauthorized. You can only view your own booking details.' }); // Return an error response
        }
        res.json({ msg: "Booking Found", data: booking })
    } catch (error) {
        console.error(error)
    }
});
//Allows user to book a locker
router.post("/addBooking", async (req, res) => {
    try {
        const { User_id, Locker_id, startDate, endDate } = req.body;
        // Validate booking dates
        const start = new Date(startDate);
        const end = new Date(endDate);
        const now = new Date();
        if (start < now || end <= start) {
            return res.status(400).json({ error: 'Invalid booking dates' });
        }
        const user = await Users.findOne({ username: req.body.username })
        if (!user) return res.json({ msg: "user not found" })
     // Create the booking
        const locker = await Lockers.findById(Locker_id);
        if (!locker) return res.json({ msg: "Locker not found" })
        // Check if the locker is available
        if (locker.Locker_Status !== 'Available') {
            return res.json({ error: 'Locker is not available' });
        }

        //update locker_status which was just booked to Reserved
        locker.Locker_Status = "Reserved";
        await locker.save();
   
        const booking = await Bookings.create({...req.body, Booking_Status: "Pending Payment"});
        res.json({ msg: "Locker Booked Successfully, please confirm payment", data: booking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Failed to book locker" });

    }
});

router.post("/bookingconfirmation", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            return res.json({ msg: "User not found" });
        }
        const booking =await Bookings.findOne(Booking_Id=req.body.Booking_Id)
        if(!booking){return res.json({msg: "Booking ID is invalid" })}
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Fakat Lockers - Booking Confirmation',
            text: "Your Locker has been booked successfully. To complete your booking please deposit the amount xyz."+
            "The details of your locker are : Locker ID: "+req.body.Locker_id+" Building Name: "+req.body.buildingName + 
            "Please deposit the amount within 24 hours to confirm your booking. If you have any queries, please contact us at xyz@gmail.com" +
            "Thank you for choosing Fakat Lockers."
             + {data : booking}
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json({ msg: 'Booking confirmation email sent' });
            }
            console.log(error);
        });
    } catch (error) {
        console.error(error);
    }
});


router.put("/RenewLockerBooking", async (req, res) => {
    try {
        const { Booking_Id, EndDate } = req.body;

        const booking = await Bookings.findOne({ Booking_Id });
        if (!booking) return res.json({ msg: "Booking not found" });
        
        // Unpmpdate end date and change start date to renewal date
        booking.StartDate = new Date();
        booking.EndDate = new Date(EndDate);
    
        booking.Booking_Status = "Renewed";
        
        await booking.save();
        return res.json({ msg: "Booking Renewed Successfully", data: booking });
        console.log(error);
    } catch (error) {
        console.error(error);
    }
});

/******* below are all the routes that WILL NOT pass through the middleware ********/

router.use((req, res, next) => {
    if (!req.user.admin) return res.json({ msg: "Unauthorized. Only admin users can perform this action" })
    else next()
})

/******* below are all the routes that WILL pass through the middleware ********/
router.get("/bookings", async (req, res) => {
    try {
        // Retrieve all bookings from the database
        const bookings = await Bookings.find();
        // Send the list of bookings in the response
        return res.json({ bookings });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});



router.put("/cancelbooking", async (req, res) => {
    try {
        const booking = await Bookings.findOne({ Booking_Id: req.body.Booking_Id })
        if (!booking) return res.json({ msg: "Booking not found" })
        if(booking.userId!=req.userId) return res.json({ msg: "You are not authorized to cancel this booking" })
        booking.Booking_Status = "Cancelled";
        await booking.save();
        return res.json({ msg: "Booking Cancelled Successfully", data: booking});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put("/ApproveBooking", async (req, res) => {
    try {
        const booking = await Bookings.findOne({ _Id: req.body.Booking_Id });
        if (!booking) return res.json({ msg: "Booking not found" });
        booking.Booking_Status = "Approved";
        Lockers.findById(booking.Locker_id).then(locker => {
            locker.Locker_Status = "Not Available";
            locker.save();
        });
        await booking.save();
        return res.json({ msg: "Booking Approved Successfully", data: booking });
        comsole.log(error);
    } catch (error) {
        console.error(error);
    }
});



module.exports = router
