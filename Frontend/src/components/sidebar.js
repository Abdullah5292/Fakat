import React from 'react'
import logo from '/Users/abdullah/Downloads/Fakat/Frontend/src/logo.png'
import {
    LayoutDashboard, UsersRound, Book, Stars, BarChart2, LogOut
} from 'lucide-react'
import { useState } from 'react'
import Arrow from "/Users/abdullah/Downloads/Fakat/Frontend/src/media/rightArrow.svg"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function SideBar() {
    const [isExpanded, setIsExpanded] = useState(true)

    const navLinks = [{

        name: "Dashboard",
        icons: LayoutDashboard,
        path: "/dashboard",
    },
    {
        name: "Users",
        icons: UsersRound,
        path: "/users",
    },
    {
        name: "Bookings",
        icons: Book,
    },
    {
        name: "Reviews",
        icons: Stars,
    },
    {
        name: "Analytics",
        icons: BarChart2,
    },
    {
        name: "Logout",
        icons: LogOut,
    }
    ]
    const variants = {
        Expanded: {
            width: "20%",
        },
        nonExpanded: {
            width: "5%",
        }
    }

    return (

        < motion.div
            animate={isExpanded ? "Expanded" : "nonExpanded"}
            variants={variants}
            div className={"relative flex flex-col w-1/5 h-screen py-12 " +
                (isExpanded ? "px-8" : " px-2")
            }>
            <div className='flex items-center h-20 px-3 space-x-3 w-20s logo-div'>
                <img src={logo} />
                <span className={isExpanded ? "block" : "hidden"}></span>
            </div >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className=" w-4 h-4 rounded-full bg-fakatred absolute -right-[10.5px] top-14 flex justify-center">
                <img src={Arrow} className="w-[6px]" />
            </div>
            <div className='flex flex-col mt-8 space-y-8'>
                {navLinks.map((link, index) => (

                    <div className={"flex items-center w-full h-12 px-4 space-x-3 rounded-lg cursor-pointer font-semibold text-fakatred hover:bg-fakatred hover:text-fakatcolor "}>
                        <link.icons />
                        <Link to={link.path}>
                            <span className={isExpanded ? "block" : "hidden"}>{link.name}</span>
                        </Link>
                    </div>
                ))}
            </div >
        </motion.div >


    )
}
export default SideBar
