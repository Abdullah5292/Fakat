import React from "react";
import NavBar from "../components/sidebar";
import Gridadmin from "../components/gridadmin";
import Footer from "../components/footer";

export const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <NavBar />
                <div className="p-5">
                    <Gridadmin />


                </div>
            </div>
            <Footer />

        </div>
    );
}

