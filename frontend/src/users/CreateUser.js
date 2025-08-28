import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../ui/css/login.css";
import profanityPackage from "@dsojevic/profanity-list";

export default function CreateUser() {
  const navigate = useNavigate(); // link navigation

  // storing the user information inside state to POST
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  // Setting useState's
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profanity: false,
  });

  // Profanity check function
  const isMalignant = (text) => {
    if (!text) return false;
    const words = profanityPackage.en.map((word) => word.match);
    const profanityPattern = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
    return profanityPattern.test(text);
  };

  // Validation functions
  const validateUsername = (username) => /^[A-Za-z0-9_]{6,20}$/.test(username);
  const validateEmail = (email) =>
    /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );
  const validateName = (name) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());

  // Handle changes to input for each field
  const onInputChange = (event) => {
    const { name, value } = event.target;

    let validationError = "";

    if (value.trim() === "") {
      validationError = "This field cannot be empty.";
    } else if (name === "username" && !validateUsername(value)) {
      validationError =
        "Username must be 6-20 characters long and contain only letters, numbers, and underscores.";
    } else if (name === "email" && !validateEmail(value)) {
      validationError = "Invalid email format.";
    } else if (name === "password" && !validatePassword(value)) {
      validationError =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character from this selection: @$!%*?&.";
    } else if (name === "name" && !validateName(value)) {
      validationError =
        "Your name must only contain alphabetical characters and single spaces.";
    } else if (isMalignant(value)) {
      validationError = "Please use appropriate language.";
    }

    // Update errors state
    setErrors((prev) => ({
      ...prev,
      [name]: validationError,
    }));

    // Update user state with new inputs
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle change for password confirmation field
  const onConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword:
        value.trim() === ""
          ? "This field cannot be empty."
          : user.password !== value
          ? "Passwords do not match."
          : "",
    }));
  };

  // Validate form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // Checking for invalid/empty fields
    const newErrors = {
      name: user.name.trim() === "" ? "Name is required." : "",
      username: user.username.trim() === "" ? "Username is required." : "",
      email: user.email.trim() === "" ? "Email is required." : "",
      password: user.password.trim() === "" ? "Password is required." : "",
      confirmPassword:
        confirmPassword.trim() === "" ? "Please confirm your password." : "",
      profanity: isMalignant(Object.values(user).join(" "))
        ? "Please use appropriate language."
        : "",
    };

    setErrors(newErrors);

    // Prevent form submission if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) return;

    try {
      // Send user data to backend via POST request
      const response = await axios.post("http://localhost:8080/users", user);
      if (response.status === 201) {
        setShowSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      // Fetch any server-side errors and display the message(s)
      if (error.response && error.response.data) {
        setErrors((prev) => ({
          ...prev,
          general: error.response.data,
        }));
      } else {
        // Catch any other errors
        setErrors((prev) => ({
          ...prev,
          general: "An unexpected error occured. Please try again.",
        }));
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center m-4">
        Register User
      </h1>
      <div className="row">
        <div
          id="formContent"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", outline: "none" }}
        >
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={onInputChange}
              />
              {errors.profanity && (
                <Alert severity="error">{errors.profanity}</Alert>
              )}
              {errors.name && <Alert severity="error">{errors.name}</Alert>}
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={user.username}
                onChange={onInputChange}
              />
              {errors.profanity && (
                <Alert severity="error">{errors.profanity}</Alert>
              )}
              {errors.username && (
                <Alert severity="error">{errors.username}</Alert>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={onInputChange}
              />
              {errors.email && <Alert severity="error">{errors.email}</Alert>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
                value={user.password}
                onChange={onInputChange}
              />
              {errors.password && (
                <Alert severity="error">{errors.password}</Alert>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirm Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter your password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
              />
              {errors.confirmPassword && (
                <Alert severity="error">{errors.confirmPassword}</Alert>
              )}
            </div>
            {showSuccess && (
              <Alert severity="success">
                Sign up successful! Redirecting . . .
              </Alert>
            )}
            {errors.general && <Alert severity="error">{errors.general}</Alert>}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger mx-2"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
