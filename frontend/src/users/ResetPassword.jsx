import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/auth/reset-password/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || "Success");
                setIsError(false);
            } else {
                setMessage(data.message || "Reset failed.");
                setIsError(true);
            }
        } catch (error) {
            console.log(error);
            setMessage("Network error. Please try again.");
            setIsError(true);
    }
    };

    const isValid = validatePassword(password);

    return (
        <form onSubmit={handleSubmit}>
            <h2> Reset Password </h2>
            <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={!isValid}> Reset </button>
            <p> {message} </p>
        </form>
    );
}