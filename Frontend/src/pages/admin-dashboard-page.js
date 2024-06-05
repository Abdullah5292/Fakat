import React from "react";
import SideBar from "../components/sidebar";
import { NavBar } from "../components/landingnavbar";
import Tabledash from "../components/tabledash";
import Footer from "../components/footer";

export const AdminDashboard = () => {
    return (
        <div>
            <NavBar />
            <div className="flex">
                <SideBar />

                <Tabledash />
            </div>

            <Footer />
        </div>
    );
}
