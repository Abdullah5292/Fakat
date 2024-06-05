import React from "react";
import CTAimg from '../media/CTAimage.png'


export const CTA = () => {
    return (
        <div className="w-full py-4 bg-fakatcolor">
            <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-0">
                <img src={CTAimg} className="w-[680px]] h-auto" alt="CTA Image" />

                <div className="text-center md:text-left">

                    <h1 className="gap-4 py-8 font-semibold md:text-8xl"><span className="text-fakatred">JOIN FAKAT</span> TODAY</h1>
                    <p className="text-3xl font-medium text-fakatred">Book a locker and start enjoying university without worries</p>
                    <a href="/lockers" className="flex justify-center"> {/* Center the button */}
                        <button className="max-[780px]:w-full px-8 py-4 mt-4 font-bold text-[#EED7C5] rounded-md max bg-fakatred"> {/* Increased button size to py-4 */}
                            Book Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
