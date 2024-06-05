import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import Bg from '../Fakat bg.png'
import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png'
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [shake, setShake] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const loginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/auth/login', {
                username,
                password,
            });

            const { msg, token } = response.data;

            if (msg === "LOGGED IN" && token) {
                Cookies.set('token', token, {
                    expires: 1 / 24, // 1 hour
                    path: "/",
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "Lax",
                });
                const role = JSON.parse(atob(token.split('.')[1])).role;
                dispatch(login({ username, token, role }));
                redirectToRolePage(role);
            } else {
                throw new Error(msg);
            }

        } catch (error) {
            setErrorMessage(error.message);
            setShake(true);
            setTimeout(() => setShake(false), 500); // Remove shake class after animation
        }
    };
    const redirectToRolePage = (role) => {
        switch (role) {
            case 'admin':
                navigate('/admin');
                break;
            case 'user':
                navigate('/landing');
                break;
            default:
                navigate('/');
                break;
        }
    };

    return (
        <div className="relative w-screen h-screen">
            <img src={Bg} alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-100" />
            <img className="absolute top-0 left-0 w-1/6 h-auto" src={logo} />
            <img className="absolute top-0 right-0 w-1/6 h-auto transform scale-x-[-1]" src={logo} />
            <img className="absolute bottom-0 left-0 w-1/6 h-auto transform scale-y-[-1]" src={logo} />
            <img className="absolute bottom-0 right-0 w-1/6 h-auto transform scale-y-[-1] transform scale-x-[-1]" src={logo} />

            <div className="absolute bottom-0 flex justify-center w-full mb-4">
                <img className="w-1/6 h-auto" src={name} />
            </div>

            <div className="relative flex items-center justify-center h-screen">
                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`w-64 p-2 mb-2 border rounded-full outline-none border-fakatcolor bg-fakatcolor`}
                    />

                    {/* <div className="relative flex items-center justify-center"> */}
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={` w-64 p-2 mb-2 border rounded-full outline-none border-fakatcolor bg-fakatcolor ${shake ? 'animate-shake' : ''}`}
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                        className="relative transform -translate-y-14 top-2 left-24"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>


                    <button
                        type="submit"
                        className="w-40 h-10 p-1 font-semibold border-none rounded-full text-fakatcolor bg-fakatred button create-account-button"
                        onClick={loginSubmit}
                    >
                        Login
                    </button>
                    {errorMessage && <div className="text-sm font-bold text-fakatred">{errorMessage} </div>}
                    <button
                        className="mt-5 font-semibold text-fakatred top-9"
                        onClick={() => navigate('/signup')}
                    >
                        Dont have an account?
                    </button>


                    <button
                        className="font-semibold text-fakatred top-9"
                        onClick={() => navigate('/forgotpassword')}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    );
};


