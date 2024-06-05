import React from 'react'
import GridUser from '../components/griduser'
import { NavBar } from '../components/landingnavbar'
import Footer from '../components/footer'
import SideBar from '../components/sidebar'

export const User = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div className="flex">
                <SideBar />
                <GridUser />
            </div>

            <Footer />
        </div>
    )
}


