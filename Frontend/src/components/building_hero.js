import React from "react";
import heroImg from '../media/heroImg.png'


export const HeroBuilding = ({ heading, subheading, backgroundImg }) => {
    return (
        <div className="relative w-full py-12 bg-fakatcolor">
            <div
                className="absolute inset-0 bg-center bg-cover opacity-50"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            ></div>
            <div className="relative md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-0">
                <div className="flex flex-col items-center justify-center gap-4 md:items-start">
                    <p className="text-4xl font-semibold text-fakatred">{heading}</p>
                    <h1 className="gap-4 py-8 font-bold text-center md:text-8xl md:text-left">{subheading}</h1>
                </div>

            </div>
        </div>
    );
}

