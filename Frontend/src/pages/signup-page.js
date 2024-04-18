import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png'
import Bg from '../Fakat bg.png'
import React, { useState } from "react";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

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

                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-full outline-none border-fakatcolor bg-fakatcolor" />
                        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor" />
                        <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor" />
                    </div>
                </div>
            </div>
        </div>

    );
};


