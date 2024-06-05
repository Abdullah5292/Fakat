import React from "react";
import Footer from "../components/footer"; // Corrected import path and capitalized component name
import Image1 from '../image1.jpg'; // Check if the file path is correct
import { Hero } from "../components/hero";
import heroImg from '../media/heroImg.png'
import { AirOutlineBook, Feed } from "@mui/icons-material";
import { TrustedBy } from "../components/trustedby";
import { Achievement } from "../components/achievement";
import { Feedback } from "../components/feedback";
import { Card } from "../components/card";
import { CTA } from "../components/cta";
import { NavBar, Navbar } from "../components/landingnavbar";
export const LandingPage = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <TrustedBy />
            <Achievement />
            <Feedback />
            <CTA />
            <Footer />
        </div >

    );
}
