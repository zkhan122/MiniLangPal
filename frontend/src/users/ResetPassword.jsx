import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../ui/context/UserContext";

export default function ResetPassword() {

    const { user } = useUser();


    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/auth/reset-password/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || "Success");
                setIsError(false);
                window.location.replace("/login");
                var delayInMilliseconds = 2000;
                
                setTimeout(function() {
                }, delayInMilliseconds);

            } else {
                setMessage(data.message || "Reset failed.");
                setIsError(true);
            }
        } catch (error) {
            console.log(error);
            setMessage("Error. Please make sure you are using the latest link or try again.");
            setIsError(true);
    }
    };

    const isValid = validatePassword(password);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2> Reset Password </h2>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={!isValid} red> Reset </button>
                <p> {message} </p>
            </form>

      {/* <p style={{ color: "black", fontSize: "16px", visibility: "visible", display: "block" }}> */}
        <p><b>Please ensure that the new password has a combination of uppercase and lowercase letters, special characters, and numbers.</b></p>
        </div>
    );
}