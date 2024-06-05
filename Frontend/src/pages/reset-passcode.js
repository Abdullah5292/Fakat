import React, { useState } from "react";
import { HeroBuilding } from "../components/building_hero";
import forgotpass from '../media/Forgotpass.png'; // Assuming you have an image for reset password
import Footer from "../components/footer";
import axios from "axios";
import { NavBar } from "../components/landingnavbar";
import { useNavigate } from "react-router-dom";


export const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [resetToken, setResetToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {
            const response = await axios.post("http://localhost:5001/auth/resetpassword", {
                email,
                resetToken,
                newPassword
            });
            if (response.data.msg === "Password reset successful") {
                alert("Password reset successful!");
                navigate('/login');
            } else {
                setErrorMessage("An error occurred during password reset.");
            }
        } catch (error) {
            console.error("Password reset error", error);
            setErrorMessage("An error occurred during password reset.");
        }
    };

    return (
        <div>
            <NavBar />
            <HeroBuilding
                heading="Reset Password"
                subheading="Reset your password here"
                backgroundImg={forgotpass} // Assuming you have an image for reset password
            />
            <div className="flex items-center justify-center h-full bg-fakatcolor">
                <form className="flex flex-col items-center w-full text-white main-content">
                    <p className="mb-8 text-4xl font-bold leading-snug text-center">
                        Enter your email, reset token, and new password to reset your password
                    </p>
                    <div className="flex flex-col items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-80 p-2 mb-2 bg-[#eee2df] border rounded-full outline-none border-[#eee2df]"
                            placeholder="Enter your email"
                        />
                        <input
                            type="text"
                            value={resetToken}
                            onChange={(e) => setResetToken(e.target.value)}
                            className="w-80 p-2 mb-2 bg-[#eee2df] border rounded-full outline-none border-[#eee2df]"
                            placeholder="Enter reset token"
                        />
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-80 p-2 mb-2 bg-[#eee2df] border rounded-full outline-none border-[#eee2df]"
                            placeholder="Enter new password"
                        />
                        <button
                            type="button"
                            className="px-8 py-3 mt-4 font-bold rounded-full text-fakatcolor bg-fakatred hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </button>
                        {errorMessage && <div className="text-sm font-bold text-fakatred">{errorMessage}</div>}
                    </div>
                </form>
            </div>
            {/* Padding here to separate from footer */}
            <div className="h-20 bg-fakatcolor"></div>
            <Footer />
        </div>
    );
};
