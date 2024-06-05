import React from 'react'
import { NavBar } from '../components/landingnavbar'
import Footer from "../components/footer";
import { Hero } from '../components/hero';
import ThreeColumns from '../components/threecolumns';
export const BuildingSelection = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <ThreeColumns />
            <Footer />
        </div>
    )
}

