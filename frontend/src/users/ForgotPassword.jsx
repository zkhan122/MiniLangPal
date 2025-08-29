import { useState, useEffect } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/forgot-password",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const contentType = response.headers.get("content-type");

      let data = {};

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.ok) {
        setMessage(data.message || "Success!");
        setIsError(false);
      } else {
        setMessage(data.message || "Something went wrong.");
        setIsError(true);
      }
    } catch (error) {
      console.log("Error", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1> Forgot Password </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {" "}
          {isLoading ? "Sending..." : "Send Reset Link"}{" "}
        </button>
        <p style={{ color: isError ? "red" : "green" }}>{message}</p>
      </form>

      <p>
        <b>
          Your password reset link will be sent to an email that is associated
          with a user account if you have signed up before.
        </b>
      </p>
      <p>
        <b>The reset link will be valid for only 30 minutes.</b>
      </p>
    </>
  );
}
