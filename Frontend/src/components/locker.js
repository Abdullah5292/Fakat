/* eslint-disable no-template-curly-in-string */
import React from "react";
import { BiCabinet } from "react-icons/bi";

export const Locker = ({ isSelected }) => {
    return (

        <div className={'flex justify-center items-center h-full w-full ${isSelected ? "bg-blue-200" : ""}'}>
            <div className="flex items-center justify-center p-4 transition duration-300 rounded-full locker-icon-container">
                <div className="px-4 py-5 hover:bg-fakatred ">
                    <BiCabinet size={60} />
                </div>
            </div>
        </div >
    );
};

