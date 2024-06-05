import React from "react";
import { Link } from "react-router-dom";

const LockerGrid = () => {
    const lockers = [
        { id: 1, lockerNumber: "L001", size: "Small", availability: true },
        { id: 2, lockerNumber: "L002", size: "Medium", availability: false },
        { id: 3, lockerNumber: "L003", size: "Large", availability: true },
        { id: 4, lockerNumber: "L004", size: "Small", availability: true },
        { id: 5, lockerNumber: "L005", size: "Medium", availability: true },
        { id: 6, lockerNumber: "L006", size: "Large", availability: false },
        { id: 7, lockerNumber: "L007", size: "Small", availability: true },
        { id: 8, lockerNumber: "L008", size: "Medium", availability: true },
        { id: 9, lockerNumber: "L009", size: "Large", availability: true },
        { id: 10, lockerNumber: "L010", size: "Small", availability: true },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="mt-10 text-4xl font-medium">Select Lockers</h1>

            <div className="grid grid-cols-5 gap-4 mt-8">
                {lockers.map((locker) => (
                    <Locker key={locker.id} locker={locker} />
                ))}
            </div>

            <div className="mt-8">
                <Link to="/checkout">
                    <button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

const Locker = ({ locker }) => {
    const lockerColorClass = locker.availability ? "bg-green-500" : "bg-red-500";

    return (
        <div className={`p-4 rounded-md ${lockerColorClass} text-white text-center`}>
            {locker.lockerNumber}
            <br />
            ({locker.size})
        </div>
    );
};

export default LockerGrid;
