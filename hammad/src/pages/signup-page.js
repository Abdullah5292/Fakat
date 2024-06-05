import logo from '../Side-logo.png';
import name from '../Fakat Locker name.png'
import Bg from '../Fakat bg.png'
import React, { useState } from "react";
// //{
// 	
//     ,
//     "ERP": "27134",
//     "username": "Admin12"
export const Signup = () => {
    const [email, setEmail] = useState("");
    const [reenterEmail, setReenterEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reenterPassword, setReenterPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [program, setProgram] = useState("");
    const [batchyear, setBatchyear] = useState("");
    const [phone_num, setPhone_num] = useState("");
    const [cnic, setCnic] = useState("");

    const [showPassword, setShowPassword] = useState(false);

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
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full p-2 border rounded-full outline-none border-fakatcolor bg-fakatcolor"
                        />
                        <input
                            type="text"
                            placeholder="Enter program"
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter batch year"
                            value={batchyear}
                            onChange={(e) => setBatchyear(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        <input
                            type="text"
                            placeholder="Enter phone number"
                            value={phone_num}
                            onChange={(e) => setPhone_num(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Enter CNIC"
                            value={cnic}
                            onChange={(e) => setCnic(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="email"
                            placeholder="Re-enter email"
                            value={reenterEmail}
                            onChange={(e) => setReenterEmail(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Re-enter password"
                            value={reenterPassword}
                            onChange={(e) => setReenterPassword(e.target.value)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor"
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="w-full p-2 border rounded-full border-fakatcolor bg-fakatcolor">
                            {showPassword ? "Hide Password" : "Show Password"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;