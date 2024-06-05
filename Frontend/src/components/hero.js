import React from "react";
import heroImg from '../media/heroImg.png'
import { Link } from "react-router-dom";


export const Hero = () => {
    return (
        <div className="w-full py-12 bg-fakatcolor">
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-0">
                <div className="flex flex-col items-center justify-center gap-4 md:items-start">
                    <p className="text-4xl font-semibold text-fakatred">Take a step today</p>

                    <h1 className="gap-4 py-8 font-bold text-center md:text-8xl md:text-left">LOCK AWAY YOUR BURDENS</h1>
                    <Link to="/locker" className="flex justify-center w-full md:justify-start">
                        <button className="px-20 py-6 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred">
                            Book Now
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src={heroImg} alt="hero" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
}
