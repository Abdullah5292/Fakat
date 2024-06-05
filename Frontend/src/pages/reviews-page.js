import React, { Fragment } from "react";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
import ReviewBox from "../components/reviewbox";
import { NavBar } from "../components/landingnavbar";
export const Reviews = () => {
    return (
        <div>
            <NavBar />
            <Fragment>
                <div className="grid items-center justify-center h-full grid-cols-1 gap-4 bg-black bg-opacity-50 sm:grid-cols-2 md:grid-cols-4">
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                </div>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    <h2 className="text-4xl">More Content Below</h2>
                    <p className="text-xl">Scroll down to see more content.</p>
                </div>
                <Footer />
            </Fragment>
        </div>
    );
}
