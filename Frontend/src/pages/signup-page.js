import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png';
import Bg from '../Fakat bg.png';

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ERP, setERP] = useState("");
    const [CNIC, setCNIC] = useState("");
    const [Phone_num, setPhone_num] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [shake, setShake] = useState(false);

    const signupSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password || !ERP || !CNIC || !Phone_num) {
            setErrorMessage("All fields are required.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorMessage("Invalid email format.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (password.length < 5) {
            setErrorMessage("Password is too short.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharacters.test(password)) {
            setErrorMessage("Password must contain a special character.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (!/^\d{5}$/.test(ERP)) {
            setErrorMessage("Invalid ERP format. ERP should be exactly 5 digits.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (!/^\d{5}-\d{7}-\d{1}$/.test(CNIC)) {
            setErrorMessage("Invalid CNIC format. CNIC should be exactly 15 digits.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        if (!/^\d{11}$/.test(Phone_num)) {
            setErrorMessage("Invalid Phone number format. Phone number should be exactly 11 digits.");
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/auth/signUp', {
                username,
                email,
                password,
                ERP,
                CNIC,
                Phone_num,
            });

            const { msg, token } = response.data;

            if (msg === "SignUp Successful" && token) {
                Cookies.set('token', token, {
                    expires: 1 / 24,
                    path: "/",
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "Lax",
                });
                navigate('/home');
            } else {
                throw new Error(msg);
            }
        } catch (error) {
            setErrorMessage(error.message);
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="relative w-screen h-screen">
            <img src={Bg} alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-100" />
            <img className="absolute top-0 left-0 w-1/6 h-auto" src={logo} alt="Logo" />
            <img className="absolute top-0 right-0 w-1/6 h-auto transform scale-x-[-1]" src={logo} alt="Logo" />
            <img className="absolute bottom-0 left-0 w-1/6 h-auto transform scale-y-[-1]" src={logo} alt="Logo" />
            <img className="absolute bottom-0 right-0 w-1/6 h-auto transform scale-y-[-1] transform scale-x-[-1]" src={logo} alt="Logo" />

            <div className="absolute bottom-0 flex justify-center w-full mb-4">
                <img className="w-1/6 h-auto" src={name} alt="Name" />
            </div>

            <div className="relative flex items-center justify-center h-screen">
                <div className="flex flex-col items-center">
                    <form onSubmit={signupSubmit}>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        {errorMessage && !/^\S+@\S+\.\S+$/.test(email) && (
                            <div className="text-red-500">Invalid email format.</div>
                        )}

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        {errorMessage && password.length < 5 && (
                            <div className="text-red-500">Password is too short.</div>
                        )}
                        {errorMessage && !/[!@#$%^&*(),.?":{}|<>]/.test(password) && (
                            <div className="text-red-500">Password must contain a special character.</div>
                        )}

                        <input
                            type="text"
                            placeholder="Enter ERP"
                            value={ERP}
                            onChange={(e) => setERP(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        {errorMessage && !/^\d{5}$/.test(ERP) && (
                            <div className="text-red-500">Invalid ERP format. ERP should be exactly 5 digits.</div>
                        )}

                        <input
                            type="text"
                            placeholder="Enter CNIC"
                            value={CNIC}
                            onChange={(e) => setCNIC(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        {errorMessage && !/^\d{5}-\d{7}-\d{1}$/.test(CNIC) && (
                            <div className="text-red-500">Invalid CNIC format. CNIC should be exactly 15 digits.</div>
                        )}

                        <input
                            type="text"
                            placeholder="Enter Phone number"
                            value={Phone_num}
                            onChange={(e) => setPhone_num(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        {errorMessage && !/^\d{11}$/.test(Phone_num) && (
                            <div className="text-red-500">Invalid Phone number format. Phone number should be exactly 11 digits.</div>
                        )}

                        <button type="submit" className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor">
                            Sign Up
                        </button>
                    </form>


                    {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
};

export default Signup;
