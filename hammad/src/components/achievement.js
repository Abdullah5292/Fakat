import React from "react";
import Achievementimg from '../media/achievement.png'
import { FaUsers } from "react-icons/fa6";
import { colors } from "@mui/material";
import { PiLockers } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";





export const Achievement = () => {
    return (


        <div className="w-full py-24 bg-fakatcolor ">
            <div className=" max-w-[1480px] m-auto grid grid-cols-2">
                <div>
                    <h1 className="gap-4 font-bold md:text-6xl ">Our <span className="text-fakatred">Achievements</span></h1>
                    <p className="mt-4 text-lg">We have been awarded as the best locker service provider at IBA.
                        Our service is top notch and we have been able to maintain a 100% customer satisfaction rate.</p>
                    <div className="grid grid-cols-2">
                        <div className="flex py-6 ">
                            <div className="p-4 rounded-md bg-fakatred">
                                <FaUsers
                                    size={30}
                                    style={{ color: "#EED7C5" }}
                                />
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold">300+</h1>
                                <p className="text-[#6d737a] text-xl">Users</p>
                            </div>
                        </div>
                        <div className="flex py-6 ">
                            <div className="p-4 rounded-md bg-fakatred">
                                <PiLockers
                                    size={30}
                                    style={{ color: "#EED7C5" }}
                                />
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold">80</h1>
                                <p className="text-[#6d737a] text-xl">Lockers</p>
                            </div>
                        </div>
                        <div className="flex py-6 ">
                            <div className="p-4 rounded-md bg-fakatred">
                                <FaRegBuilding
                                    size={30}
                                    style={{ color: "#EED7C5" }}
                                />
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold">4</h1>
                                <p className="text-[#6d737a] text-xl">Buidlings</p>
                            </div>
                        </div>
                        <div className="flex py-6 ">
                            <div className="p-4 rounded-md bg-fakatred">
                                <MdAttachMoney
                                    size={30}
                                    style={{ color: "#EED7C5" }}
                                />
                            </div>
                            <div className="px-3">
                                <h1 className="text-2xl font-semibold">3,000,000</h1>
                                <p className="text-[#6d737a] text-xl">Generated</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex content-center">
                        <a href="/lockers">
                            <button className="content-center px-12 py-3 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred">Book Now</button>
                        </a>
                    </div>
                </div>

                <img src={Achievementimg} className="order-first w-auto h-auto m-auto md:order-last " alt="Achievement" />

            </div>
        </div>

    );

}