import React, { useState, useEffect } from "react";
import { NavBar } from "../components/landingnavbar";
import Footer from "../components/footer";
import { BiCabinet } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { HeroBuilding } from "../components/building_hero";
import tabba from '../media/tabba.png';

export const Tabba = () => {
    const [selectedLockers, setSelectedLockers] = useState([]);
    const [lockers, setLockers] = useState([]);
    const token = useSelector((state) => state.Auth.token);

    const fetchLockers = async () => {
        try {
            const response = await axios.get("http://localhost:5001/locker/getLockersInBuilding?Building_Name=Tabba", {
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
        console.log("Token");
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

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <HeroBuilding
                heading="Select Lockers"
                subheading="Choose your locker"
                backgroundImg={tabba}
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
                                                                <div>Building: Tabba</div>
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
            <Footer />
        </div>
    );
};

const Locker = ({ isSelected }) => {
    return (
        <div className={`locker ${isSelected ? "selected" : ""}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: 15 }}>
            <BiCabinet size={60} />
        </div >
    );
};

export default Tabba;
