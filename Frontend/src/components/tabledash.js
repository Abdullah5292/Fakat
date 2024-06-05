import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Tabledash = () => {
    const [totalBookings, setTotalBookings] = useState(0);
    const [totalLockers, setTotalLockers] = useState(0);
    const token = useSelector((state) => state.Auth.token);

    useEffect(() => {
        const fetchBookingCount = async () => {
            try {
                const response = await axios.get('http://localhost:5001/booking/bookingcount', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                const { count } = response.data.data; // Extract count from the response data
                setTotalBookings(count);
            } catch (error) {
                console.error("Error fetching total bookings:", error);
            }
        };

        const fetchLockerCount = async () => {
            try {
                const response = await axios.get('http://localhost:5001/locker/getLockerCount', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                const { totalLockers } = response.data.data; // Extract totalLockers from the response data
                setTotalLockers(totalLockers);
            } catch (error) {
                console.error("Error fetching total lockers:", error);
            }
        };

        fetchBookingCount();
        fetchLockerCount();
    }, [token]);

    return (
        <div className="flex flex-col px-16 py-10 top-15">
            <h1>Dashboard</h1>

            <div className="flex space-x-8">
                <div className="w-[450px] h-[150px] rounded justify-center p-4 flex flex-col text-fakatred font-semibold shadow-lg">
                    <span>Total Lockers</span>
                    <span className="text-fakatred">{totalLockers} lockers</span>
                </div>

                <div className="w-[450px] h-[150px] rounded justify-center p-4 flex flex-col text-fakatred font-semibold shadow-lg">
                    <span>Total Bookings</span>
                    <span className="text-fakatred">{totalBookings} bookings</span>
                </div>
            </div>
        </div>
    );
};

export default Tabledash;
