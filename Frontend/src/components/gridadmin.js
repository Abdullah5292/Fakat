import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useSelector } from "react-redux";

const Gridadmin = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = useSelector((state) => state.Auth.token);


    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5001/booking/bookings', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            const data = response.data.bookings.map((booking) => ({
                id: booking._id,
                username: booking.username,
                startDate: new Date(booking.StartDate).toLocaleDateString(),
                endDate: new Date(booking.EndDate).toLocaleDateString(),
                bookingStatus: booking.Booking_Status,
                lockerId: booking.Locker_id,
                lockerStatus: booking.Locker_Status,
                buildingName: booking.Building_Name,
            }));

            setBookings(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching bookings:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchBookings();
        }
    }, [token]);

    const handleAcceptBooking = async (id) => {
        try {
            await axios.put('http://localhost:5001/booking/ApproveBooking', { Booking_Id: id }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            updateBookingStatus(id, 'Approved');
        } catch (error) {
            console.error("Error approving booking:", error);
        }
    };

    const handleRejectBooking = async (id) => {
        try {
            await axios.put('http://localhost:5001/booking/cancelbooking', { Booking_Id: id }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            updateBookingStatus(id, 'Cancelled');
        } catch (error) {
            console.error("Error rejecting booking:", error);
        }
    };


    const updateBookingStatus = (id, newStatus) => {
        setBookings((prevBookings) =>
            prevBookings.map((booking) =>
                booking.id === id ? { ...booking, bookingStatus: newStatus } : booking
            )
        );
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "username", headerName: "Username", width: 150 },
        { field: "startDate", headerName: "Start Date", width: 150 },
        { field: "endDate", headerName: "End Date", width: 150 },
        { field: "bookingStatus", headerName: "Booking Status", width: 200 },
        {
            field: "acceptBooking",
            headerName: "Accept Booking",
            width: 150,
            renderCell: (params) => (

                <button className="items-center justify-center h-10 gap-4 p-1 px-6 py-1 font-semibold border-none rounded-md w-30 text-fakatcolor bg-fakatred button"

                    onClick={() => handleAcceptBooking(params.row.id)}
                >
                    Accept
                </button>
            ),
        },
        {
            field: " rejectBooking", headerName: "Reject Booking", width: 150,
            renderCell: (params) => (
                <button className="items-center justify-center h-10 gap-4 p-1 px-6 py-1 font-semibold border-none rounded-md w-30 text-fakatcolor bg-fakatred button"
                    onClick={() => handleRejectBooking(params.row.id)}
                >
                    Reject
                </button>
            ),
        },
    ];

    return (
        <Box >
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <DataGrid
                rows={bookings}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                loading={loading}
                autoHeight
            />
        </Box>
    );
};

export default Gridadmin;
