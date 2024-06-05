// src/components/ThreeColumns.js
import React from 'react';
import aman from '../media/aman.png'
import adamjee from '../media/adamjee.png'
import sc from '../media/sc.png'
import tabba from '../media/tabba.png'

const ThreeColumns = () => {
    return (
        <div className="w-full h-full py-12 bg-white">
            <div>
                <div className=" max-w-[1480px] m-auto max-w-[600px]">
                    <h1 className="text-4xl font-bold text-center text-fakatred">Please select the building you wish to book a Locker from</h1>
                </div>
                <div className="flex justify-around w-full h-full gap-3 py-12">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={aman}
                            alt="Aman CED"
                            className="object-cover w-64 h-64 rounded-full shadow-lg"
                        />
                        <div className="flex content-center">
                            <a href="/aman">
                                <button className="content-center px-12 py-3 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred"> Aman CED </button>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={adamjee}
                            alt="Adamjee"
                            className="object-cover w-64 h-64 rounded-full shadow-lg"
                        />
                        <div className="flex content-center">
                            <a href="/adamjee">
                                <button className="content-center px-12 py-3 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred"> Adamjee </button>
                            </a>
                        </div>

                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={sc}
                            alt="Student Center"
                            className="object-cover w-64 h-64 rounded-full shadow-lg"
                        />
                        <div className="flex content-center">
                            <a href="/studentcenter">
                                <button className="content-center px-12 py-3 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred"> Student Center </button>
                            </a>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col items-center">
                        <img
                            src={tabba}
                            alt="Tabba"
                            className="object-cover w-64 h-64 rounded-full shadow-lg"
                        />
                        <div className="flex content-center">
                            <a href="/tabba">
                                <button className="content-center px-12 py-3 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred"> Tabba </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ThreeColumns;
