import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import "../ui/css/login.css";
import profanityPackage from "@dsojevic/profanity-list";

export default function CreateUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profanity: {
      name: "",
      username: "",
      email: "",
    },
    general: "",
  });

  // Profanity check function
  const isMalignant = (text) => {
    if (!text) return false;
    const words = profanityPackage.en.map((word) => word.match);
    const profanityPattern = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
    return profanityPattern.test(text);
  };

  // Validation functions
  const validateUsername = (username) => /^[a-z0-9_]{6,20}$/.test(username); // lowercase enforced
  const validateEmail = (email) => /^[\w.+-]+@[\w-]+(\.[\w-]+)+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/.test(
      password
    );
  const validateName = (name) =>
    /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim()) &&
    name.trim().length <= 20 &&
    !/^\s|\s$/.test(name);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    let validationError = "";

    const inputValue =
      name === "username"
        ? value.trim().toLowerCase() // usernames normalised
        : name === "email"
        ? value.trim() // emails trimmed
        : value; // names and passwords keep raw input (so spaces are allowed)

    if (inputValue.trim() === "") {
      validationError = "This field cannot be empty.";
    } else if (name === "username" && !validateUsername(inputValue)) {
      validationError =
        "Username must be 6-20 characters, lowercase letters, numbers, underscores only.";
    } else if (name === "email" && !validateEmail(inputValue)) {
      validationError = "Invalid email format.";
    } else if (name === "password" && !validatePassword(inputValue)) {
      validationError =
        "Password must be at least 8 chars, with upper, lower, digit, and special character (best to use '!').";
    } else if (name === "name" && !validateName(inputValue)) {
      validationError =
        "Your name must only contain alphabetical characters, single spaces, no leading/trailing spaces, and cannot exceed 20 characters.";
    }

    const profanityError = isMalignant(inputValue)
      ? "Please use appropriate language."
      : "";

    setErrors((prev) => ({
      ...prev,
      [name]: validationError,
      profanity: { ...prev.profanity, [name]: profanityError },
    }));

    setUser((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  // Confirm password handler
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

  // Re-validate confirmPassword if password changes
  useEffect(() => {
    if (confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword:
          user.password !== confirmPassword ? "Passwords do not match." : "",
      }));
    }
  }, [user.password]);

  // Submit handler
  const onSubmit = async (event) => {
    event.preventDefault();

    // Build errors
    const newErrors = {
      name: !user.name ? "Name is required." : "",
      username: !user.username ? "Username is required." : "",
      email: !user.email ? "Email is required." : "",
      password: !user.password ? "Password is required." : "",
      confirmPassword: !confirmPassword.trim()
        ? "Please confirm your password."
        : user.password !== confirmPassword
        ? "Passwords do not match."
        : "",
      profanity: {
        name: isMalignant(user.name) ? "Please use appropriate language." : "",
        username: isMalignant(user.username)
          ? "Please use appropriate language."
          : "",
        email: isMalignant(user.email)
          ? "Please use appropriate language."
          : "",
      },
      general: "",
    };

    setErrors(newErrors);

    // Flatten all error messages for a single check
    const allErrors = [
      newErrors.name,
      newErrors.username,
      newErrors.email,
      newErrors.password,
      newErrors.confirmPassword,
      ...Object.values(newErrors.profanity),
    ];

    // If any error exists, stop submission
    if (allErrors.some((err) => err && err.trim() !== "")) return;

    const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://minilangpal-backend-production.up.railway.app';

    // If no errors, proceed with API call
    try {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(2000);
      const response = await axios.post(`${API_BASE_URL}/users`, user);
      if (response.status === 201) {
        setShowSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { field, message } = error.response.data;
        if (field && message) {
          setErrors((prev) => ({ ...prev, [field]: message }));
        } else {
          setErrors((prev) => ({ ...prev, general: error.response.data }));
        }
      } else {
        setErrors((prev) => ({
          ...prev,
          general: "An unexpected error occurred. Please try again.",
        }));
      }
    }
  };

  const hasErrors = () => {
    const fieldErrors =
      !user.name ||
      !validateName(user.name) ||
      isMalignant(user.name) ||
      !user.username ||
      !validateUsername(user.username) ||
      isMalignant(user.username) ||
      !user.email ||
      !validateEmail(user.email) ||
      isMalignant(user.email) ||
      !user.password ||
      !validatePassword(user.password) ||
      !confirmPassword ||
      user.password !== confirmPassword;

    return fieldErrors;
  };

  return (
    <div className="container">
      <h1 className="text-center m-4">Register User</h1>
      <div className="row">
        <div
          id="formContent"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            outline: "none",
          }}
        >
          <form onSubmit={onSubmit}>
            {/* Name */}
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
              {errors.profanity.name && (
                <Alert severity="error">{errors.profanity.name}</Alert>
              )}
              {errors.name && <Alert severity="error">{errors.name}</Alert>}
            </div>

            {/* Username */}
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
              {errors.profanity.username && (
                <Alert severity="error">{errors.profanity.username}</Alert>
              )}
              {errors.username && (
                <Alert severity="error">{errors.username}</Alert>
              )}
            </div>

            {/* Email */}
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
              {errors.profanity.email && (
                <Alert severity="error">{errors.profanity.email}</Alert>
              )}
              {errors.email && <Alert severity="error">{errors.email}</Alert>}
            </div>

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
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
                Sign up successful! Redirecting...
              </Alert>
            )}
            {errors.general && <Alert severity="error">{errors.general}</Alert>}

            <button
              type="submit"
              className="btn btn-outline-primary"
              disabled={hasErrors()}
            >
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
