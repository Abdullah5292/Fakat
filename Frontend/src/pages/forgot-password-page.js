import React, { useState } from "react";
import { HeroBuilding } from "../components/building_hero";
import forgotpass from '../media/Forgotpass.png'
import Footer from "../components/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavBar } from "../components/landingnavbar";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const ResetPassword = async () => {
        if (!email) {
            setErrorMessage("Please enter your email address.");
            return;
        }

        const PasswordResetData = {
            email: email,
        };
        try {
            const response = await axios.post("http://localhost:5001/auth/forgotpassword", PasswordResetData);
            if (response.status === 200) {
                alert("Password reset code sent successfully!");
                // Redirect to a success page or reset the state
            } else {
                setErrorMessage("Password reset code failed.");
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
                heading="Forgot Password"
                subheading="Let's get you back"
                backgroundImg={forgotpass} />
            <div className="flex items-center justify-center h-full bg-fakatcolor">
                <form className="flex flex-col items-center w-full text-white main-content" onSubmit={(e) => e.preventDefault()}>
                    <p className="mb-8 text-4xl font-bold leading-snug text-center">
                        Enter your email address and we will send<br />you a code to reset your password
                    </p>
                    <div className="flex flex-col items-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-80 p-2 mb-2 bg-[#eee2df] border rounded-full outline-none border-[#eee2df]"
                            placeholder="Enter your email address"
                        />
                        <Link to="/resetpassword">
                            <button
                                type="button"
                                className="px-8 py-3 mt-4 font-bold rounded-full text-fakatcolor bg-fakatred hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                                onClick={ResetPassword}
                            >
                                Send Code
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            {/* Padding here to separate from footer */}
            <div className="h-20 bg-fakatcolor"></div>
            <Footer />
        </div>
    );
}
