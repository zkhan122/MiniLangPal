import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from "axios";
import '../css/login.css';
import { Username } from "../context/UserContext";

export default function Login() {

    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUsername: setGlobalUsername } = Username();


    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);




const handleSubmit = async (e) => {
  e.preventDefault();

  // Get values from form inputs
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;

  // Check if fields are empty
  if (!usernameInput || !passwordInput) {
    console.log("Please fill in all fields");
    setShowError(true);
    setTimeout(() => navigate('/'), 2000); // Redirect after showing error
    return;
  }

  // Admin login check (for testing purposes)
  if (usernameInput === "admin" && passwordInput === "admin") {
    console.log("Login successful");
    setGlobalUsername(username);
    setShowSuccess(true);
    setTimeout(() => navigate("/"), 2500); // Redirect after success
    return;
  }
  
  // Prepareing login data
  const loginData = { username: usernameInput, password: passwordInput };

  try {
    // Sending POST request to backend
    const response = await axios.post("http://localhost:8080/login", loginData);

    // Handling the  successful login
    if (response.status === 200) {
      console.log("Login successful");
      setGlobalUsername(username);
      setShowSuccess(true);
      setTimeout(() => navigate("/"), 2500); // Redirect after success
    } else {
      // Handling errors returned by the server
      setShowError(response.data.message || "Login failed, please retry");
    }
  } catch (error) {
    // Handling network or server errors
    console.error("Error during login:", error);
    setShowError("An error occurred, please retry");
  }
};


  return (
    <div>
      <h1>Login Page</h1>
      {showError && <Alert severity="error">Login Failed</Alert>}
      {showSuccess && <Alert severity="success">Login Successful</Alert>}

      <div className="wrapper fadeInDown" method="post">
        <div id="formContent">

          <form onSubmit={handleSubmit}>
            <input type="text" id="username" className="fadeIn second" name="username" placeholder="username" value={username}  onChange={handleUsernameChange} required/>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" onChange={handlePasswordChange} required/>
            <input type="submit" className="fadeIn fourth" value="Log In" required/>
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="/">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}