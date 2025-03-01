import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
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

  const [confirmPassword, setConfirmPassword] = useState("");

  const isMalignant = (text) => {
    if (!text) return false;

    const words = profanityPackage.en.map((word) => word.match);
    console.log(words.toString());
    const profanityPattern = new RegExp(`\\b(${words.join("|")})\\b`, "gi");
    console.log(profanityPattern);
    return profanityPattern.test(text);
  };

  const onInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (isMalignant(fieldValue)) {
      setShowProfanityError(true);
      return;
    }

    setShowPasswordError(false);
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const { name, username, email, password } = user;

  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showProfanityError, setShowProfanityError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setShowProfanityError(false);
    setShowPasswordError(false);
    setShowSuccess(false);

    if (isMalignant(username) || isMalignant(email) || isMalignant(name)) {
      setShowProfanityError(true);
      return;
    }

    if (password !== confirmPassword) {
      setShowPasswordError(true);
      // alert("Passwords do not match");
      return;
    }
    try {
      // If all fields are valid, then we can post the user by submitting the form
      const response = await axios.post("http://localhost:8080/users", user);

      if (response.status === 201) {
        setShowSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        throw new Error("Unexpected response from server.");
      }
    } catch (error) {
      console.log("Error creating user ", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>User Page</h1>
      {showProfanityError && (
        <Alert severity="error">Please use appropriate language.</Alert>
      )}
      {showPasswordError && (
        <Alert severity="error">Passwords do not match</Alert>
      )}
      {showSuccess && <Alert severity="success">Sign up successful!</Alert>}
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form onSubmit={(event) => onSubmit(event)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
              />
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
                value={username}
                onChange={onInputChange}
              />
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
                value={email}
                onChange={onInputChange}
              />
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
                value={password}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Renter your password"
                name="password2"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
              />
            </div>

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
