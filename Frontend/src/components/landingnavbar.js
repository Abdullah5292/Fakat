import React, { useState } from 'react';
import logo from '../media/logo.png'
import lock from '../media/lock.svg'
import redlock from '../media/lock red.svg'
import hamburgerMenu from '../media/hamburgerMenu.svg'
import close from '../media/close.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';


export const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
    const { loggedIn, role } = useSelector((state) => state.Auth);
    const dispatch = useDispatch();

    const handleLogout = (state) => {
        dispatch(
            logout(state)
        )
    }



    return (
        <div className='w-full h-[80px] bg-fakatred border-b'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                <a href='/landing'> {/* Corrected the href value */}
                    <img src={logo} className="h-[50px]" />
                </a>

                <div className='items-center hidden md:flex '>
                    <ul className='flex gap-5 text-xl font-semibold text-fakatcolor'>
                        <a href='/landing'>
                            <li>Home</li>
                        </a>
                        <a href='/aboutus'>
                            <li>About</li>
                        </a>
                        <a href='/reviews'>
                            <li>Reviews</li>
                        </a>
                        {/* check if user logged in */}

                        <a href='/building'>
                            <li>Lockers</li>
                        </a>
                        <a href='/pricing'>
                            <li>Pricing</li>
                        </a>
                    </ul>
                </div>

                {loggedIn ?
                    <div className='hidden gap-4 md:flex '>
                        <a href='/home'>
                            <button className='flex items-center justify-between gap-4 px-5 py-3 font-bold text-white rounded-md bg-fakatcolor' onClick={handleLogout}>
                                <img src={redlock} />
                                Logout
                            </button>
                        </a>
                    </div> :
                    <div className='hidden gap-4 md:flex '>
                        <a href='/login'>
                            <button className='flex items-center justify-between gap-4 px-5 py-3 font-bold text-white rounded-md bg-fakatcolor'>
                                <img src={redlock} />
                                Login
                            </button>
                        </a>
                        <a href='/signup'>
                            <button className='px-5 py-3 font-bold text-white rounded-md bg-fakatcolor'>Sign Up Now</button>
                        </a>
                    </div>
                }

                <div className='md:hidden' onClick={handleClick}>
                    <img src={toggle ? close : hamburgerMenu} />
                </div>




            </div>

            <div className={toggle ? 'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b' : 'hidden'}>
                <ul>
                    <a href='/landing'>
                        <li className='p-4 hover:bg-gray-100'>Home</li>
                    </a>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <a href='/reviews'>
                        <li className='p-4 hover:bg-gray-100'>Reviews</li>
                    </a>
                    <a href='/lockers'>
                        <li className='p-4 hover:bg-gray-100'>Lockers</li>
                    </a>
                    <a href='/pricing'>
                        <li className='p-4 hover:bg-gray-100'>Pricing</li>
                    </a>
                    <div className='flex flex-col gap-4 my-4'>
                        <button className='flex items-center justify-center gap-2 px-3 py-4 border bg-fakatred'>
                            <img src={lock} />
                            Login
                        </button>
                        <button className='px-8 py-5 font-bold text-white rounded-md bg-fakatred'>Sign Up Now</button>
                    </div>
                </ul>
            </div>


        </div>
    )
}

