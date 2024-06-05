import React, { useState, useEffect } from "react";
import { NavBar } from "../components/landingnavbar";
import Footer from "../components/footer";
import { BiCabinet } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeroBuilding } from "../components/building_hero";
import adamjee from '../media/adamjee.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Adamjee = () => {
    const [selectedLockers, setSelectedLockers] = useState([]);
    const [lockers, setLockers] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [rentalDuration, setRentalDuration] = useState("daily");
    const token = useSelector((state) => state.Auth.token);
    const username = useSelector((state) => state.Auth.username); // Assuming username is stored in the Auth state
    const userId = useSelector((state) => state.Auth.userId); // Assuming userId is stored in the Auth state

    const fetchLockers = async () => {
        try {
            const response = await axios.get("http://localhost:5001/locker/getLockersInBuilding?Building_Name=Adamjee", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setLockers(response.data.data || []);
        } catch (error) {
            console.error("Failed to fetch lockers", error);
            setLockers([]);
        }
    };

    useEffect(() => {
        fetchLockers();
    }, [token]);

    const handleLockerClick = (lockerId) => {
        const locker = lockers.find(l => l._id === lockerId);
        if (locker && locker.Locker_Status === "Available" && !selectedLockers.includes(lockerId)) {
            setSelectedLockers([lockerId]);
        }
    };

    const clearSelectedLockers = () => {
        setSelectedLockers([]);
    };

    const handleDurationChange = (event) => {
        setRentalDuration(event.target.value);
        adjustEndDate(startDate, event.target.value);
    };

    const adjustEndDate = (start, duration) => {
        let newEndDate = new Date(start);
        switch (duration) {
            case "daily":
                newEndDate.setDate(newEndDate.getDate() + 1);
                break;
            case "monthly":
                newEndDate.setMonth(newEndDate.getMonth() + 1);
                break;
            case "semester":
                newEndDate.setMonth(newEndDate.getMonth() + 6);
                break;
            default:
                break;
        }
        setEndDate(newEndDate);
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        adjustEndDate(date, rentalDuration);
    };

    const completeBooking = async () => {
        if (selectedLockers.length === 0) {
            alert("No locker selected");
            return;
        }

        const bookingData = {
            username: username,
            StartDate: startDate,
            EndDate: endDate,
            Booking_Status: "Pending payment",
            User_id: userId,
            Locker_id: selectedLockers[0],
            Building_Name: "Adamjee",
        };

        try {
            const addBookingResponse = await axios.post("http://localhost:5001/booking/addBooking", bookingData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (addBookingResponse.status === 200) {
                const bookingConfirmationResponse = await axios.post("http://localhost:5001/booking/bookingconfirmation", bookingData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (bookingConfirmationResponse.status === 200) {
                    alert("Booking completed successfully!");
                    // Redirect to a success page or reset the state
                    clearSelectedLockers();
                } else {
                    alert("Booking confirmation failed.");
                }
            } else {
                alert("Booking failed.");
            }
        } catch (error) {
            console.error("Booking error", error);
            alert("An error occurred during booking.");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HeroBuilding
                heading="Adamjee Building"
                subheading="Book your locker"
                backgroundImg={adamjee}
            />
            <main className="flex-grow">
                <div className="flex flex-col items-center justify-center text-white main-content">
                    <h1 className="mt-10 text-4xl font-medium">Select Lockers</h1>

                    <div className="flex w-full flex-grow h-[700px] bg-gray-500 seats-and-bill-areas p-3 gap-3">
                        <div className="h-full bg-black flex-[8] seats-selection-area rounded-lg border-black px-3 pt-3 flex flex-col">
                            <div className="flex-[12]">
                                <div className="toprow&grid&screen">
                                    <div className="grid grid-cols-2 grid-rows-5 gap-1 seats-grid">
                                        {Array.isArray(lockers) && lockers.length > 0 ? (
                                            lockers.map((locker) => (
                                                <div
                                                    key={locker._id}
                                                    className={`seat-block ${locker.Locker_Status === "Available" ? "available-seat" : "reserved-seat"}`}
                                                    onClick={() => handleLockerClick(locker._id)}
                                                >
                                                    <Locker isSelected={selectedLockers.includes(locker._id)} />
                                                </div>
                                            ))
                                        ) : (
                                            <p>No lockers available</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-[4] bill-area rounded-lg flex flex-col bg-gradient-to-b from-gray-800 to-gray-900">
                            <div className="px-12 pt-20 receipt-area">
                                <div className="bg-black rounded-2xl">
                                    <div className="mb-4 text-3xl font-bold text-center">Total</div>
                                    <div className="bg-gray-100 rounded-[0.25rem] calculation-area">
                                        <div className="calculation-columns">
                                            <div className="item-column">
                                                <div className="mb-4 font-bold text-black underline">Item</div>
                                                {selectedLockers.length > 0 ? (
                                                    lockers
                                                        .filter(locker => selectedLockers.includes(locker._id))
                                                        .map(locker => (
                                                            <div key={locker._id} className="text-black">
                                                                <div>Building: Adamjee</div>
                                                                <div>Availability: {locker.Locker_Status}</div>
                                                                <div>Locker Number: {locker.Locker_num}</div>
                                                            </div>
                                                        ))
                                                ) : (
                                                    <div className="text-black">No Locker Selected</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col px-12">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="text-3xl font-bold">Price</div>
                                    <select
                                        className="p-2 mt-2 rounded"
                                        value={rentalDuration}
                                        onChange={handleDurationChange}
                                    >
                                        <option value="daily">Daily</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="semester">Semester</option>
                                    </select>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex flex-col items-center">
                                        <div className="text-lg font-bold">Start Date</div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleStartDateChange}
                                            dateFormat="MM/dd/yyyy"
                                            className="p-2 mt-2 rounded"
                                        />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="text-lg font-bold">End Date</div>
                                        <DatePicker
                                            selected={endDate}
                                            onChange={date => setEndDate(date)}
                                            dateFormat="MM/dd/yyyy"
                                            className="p-2 mt-2 rounded"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center py-6">
                                <button
                                    className="items-center w-40 h-10 p-1 font-semibold border-none rounded-md text-fakatcolor bg-fakatred button create-account-button"
                                    onClick={clearSelectedLockers}
                                >
                                    Clear
                                </button>
                            </div>
                            <div className="flex justify-center py-6">
                                <button
                                    className='flex items-center justify-between gap-4 px-5 py-3 font-bold text-white rounded-md bg-fakatcolor'
                                    onClick={completeBooking}
                                >
                                    Complete Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


const Locker = ({ isSelected }) => {
    return (
        <div className={`locker ${isSelected ? "selected" : ""}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: 15 }}>
            <BiCabinet size={60} />
        </div>
    );
};

