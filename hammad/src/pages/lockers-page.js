import React, { useState, useEffect } from "react";
import { NavBar } from "../components/landingnavbar";
import Footer from "../components/footer";
import { BiCabinet } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import tabba from '../media/tabba.png'
import { useSelector } from "react-redux";
import { HeroBuilding } from "../components/building_hero";
export const Lockers = () => {
    const [selectedLockers, setSelectedLockers] = useState([]);
    const [lockers, setLockers] = useState([]);
    const token = useSelector((state) => state.Auth.token);

    useEffect(() => {
        const fetchLockers = async () => {
            try {
                const response = await axios.get("http://localhost:5001/locker/getLockersInBuilding?Building_Name=Tabba", {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFiZDUyOTIiLCJjcmVhdGVkQXQiOiIyMDI0LTA2LTAyVDEwOjAzOjIyLjE1NloiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzE3MzIyNjAyLCJleHAiOjE3MTc0MDkwMDJ9.NXZRxME5WpP_gV1CHLxrPJdWjRr77rcdi7Vl8QLfHDY`,
                    }
                });
                // Set the lockers state with the response data
                setLockers(response.data.data || []);
            } catch (error) {
                console.error("Failed to fetch lockers", error);
                setLockers([]);
            }
        };

        fetchLockers();
    }, [token]); // Re-run the effect if the token changes

    // const handleLockerClick = (lockerId) => {
    //     if (!selectedLockers.includes(lockerId)) {
    //         setSelectedLockers([...selectedLockers, lockerId]);
    //     } else {
    //         setSelectedLockers(selectedLockers.filter((locker) => locker !== lockerId));
    //     }
    // };

    // const calculateTotalPrice = () => {
    //     if (lockers.length > 0) {
    //         return (selectedLockers.length * lockers[0].price).toFixed(2);
    //     }
    //     return (0).toFixed(2);
    // };

    const clearSelectedLockers = () => {
        setSelectedLockers();
    };
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HeroBuilding
                heading="Select Lockers"
                subheading="Choose your locker"
                backgroundImg="tabba">
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
                                                    // onClick={() => handleLockerClick(locker._id)}
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
                                                    <div className="text-black">Locker Rental</div>
                                                </div>
                                                <div className="qty-column">
                                                    <div className="mb-4 font-bold text-center text-black underline">Qty</div>
                                                    <div className="text-center text-black">x {selectedLockers.length}</div>
                                                </div>
                                                {/* <div className="price-column">
                                                <div className="mb-4 font-bold text-center text-black underline">Price</div>
                                                <div className="text-center text-black">${lockers.length > 0 ? lockers[0].price.toFixed(2) : '0.00'}</div>
                                            </div> */}
                                            </div>
                                            {/* <div className="pt-16 pb-2 total-row-area">
                                            <div className="total-row-info">
                                                <div className="font-bold">Total</div>
                                                <div className="font-bold text-center">${calculateTotalPrice()}</div>
                                            </div>
                                        </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className="w-40 h-10 p-1 font-semibold text-black bg-white border-none rounded-full button create-account-button"
                                        onClick={clearSelectedLockers}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </HeroBuilding>
            <Footer />
        </div>
    );
};

const Locker = ({ isSelected }) => {
    return (
        <div className={`locker ${isSelected ? "selected" : ""}`}>
            <BiCabinet size={40} />
        </div>
    );
};
// Map Redux state to component props
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});


