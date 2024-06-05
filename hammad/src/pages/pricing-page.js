import { NavBar } from "../components/landingnavbar";
import React from "react";
import Footer from "../components/footer";
import { Grid } from "@mui/material";


export const Pricing = () => {
    return (
        <div>
            <NavBar />
            {/* Full-screen image section */}

            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                <h1 className="text-6xl text-white">Welcome to the pricing Page</h1>
                <p className="text-xl text-white">This is a simple pricing page</p>
            </div>
            <Footer />
        </div>

    );
}
