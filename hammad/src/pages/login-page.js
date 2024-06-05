import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png'
import Bg from '../Fakat bg.png'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import { connect, useDispatch } from "react-redux";
import { login } from "../slices/authSlice";
import { BiCabinet } from "react-icons/bi";





export const Login = (loginUser) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const loginSubmit = async (e) => {

        e.preventDefault();
        const response = await axios.post(`http://localhost:5001/auth/login`, {
            username: username,
            password: password,
        });
        window.alert(response.data.msg);



        const { message, token } = response.data;
        const usernameRes = response.data.username;

        console.log("message:", message, " token:", token, "username:", usernameRes);
        Cookies.set(token, {
            expires: 1 / 24, // 1 hr
            path: "/",
            // secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
        });
        // setIsLoggedIn(true);

        if (response.data.msg === "LOGGED IN")
            dispatch(
                login({
                    userDetails: response.data.user,
                    token: response.data.token,
                })
            ); // This should be an action creator that dispatches login action
        navigate('/landing');
    };
    return (
        <div class=" relative h-screen w-screen " >
            <img src={Bg} alt="Background" className="absolute inset-0 object-cover w-full h-full opacity-100" />
            <img className="absolute top-0 left-0 w-1/6 h-auto" src={logo} />
            <img className="absolute top-0 right-0 w-1/6 h-auto transform scale-x-[-1]" src={logo} />
            <img className="absolute bottom-0 left-0 w-1/6 h-auto transform scale-y-[-1]" src={logo} />
            <img className="absolute bottom-0 right-0 w-1/6 h-auto transform scale-y-[-1] transform scale-x-[-1]" src={logo} />

            <div class="absolute w-full flex justify-center bottom-0 mb-4">
                <img class="w-1/6 h-auto" src={name} />
            </div>

            <div class=" relative h-screen flex justify-center items-center">

                <div class="flex flex-col items-center">

                    <input type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-64 p-2 mb-4 border rounded-full outline-none border-fakatcolor bg-fakatcolor" />
                    <input type={showPassword ? "text" : "password"} placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-64 p-2 mb-4 border rounded-full outline-none border-fakatcolor bg-fakatcolor" />
                    <button type="submit" className="w-40 h-10 p-1 font-semibold border-none rounded-full text-fakatcolor bg-fakatred button create-account-button" onClick={loginSubmit}>
                        Login
                    </button >

                </div>
            </div>
        </div >


    )
}

// // Map Redux state to component props
const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
});

// Map Redux actions to component props
const mapDispatchToProps = {
    login // This should be an action creator that dispatches login action
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);

