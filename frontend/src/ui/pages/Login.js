import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from "axios";
import '../css/login.css';
import { useUser } from "../context/UserContext";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Track role in state
  const { login } = useUser();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setShowError(false);
    setShowSuccess(false);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setShowError(false);
    setShowSuccess(false);
  };

  const handleRoleChange = (event) => {
    
    setRole(event.target.value);
    setShowError(false);
    setShowSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const roleInput = role; // "user" or "admin"
    const usernameInput = username;
    const passwordInput = password;

    // Check if fields are empty
    if (!usernameInput || !passwordInput || !roleInput) {
      setShowError(true);
      return;
    }
    console.log("ROLE: " + roleInput);
    // Determining endpoint based on role
    const endpoint = roleInput === "ADMIN" ? "admin/login-attempt" : "users/login-attempt";

    try {
      const response = await axios.post(`http://localhost:8080/${endpoint}`, {
        username: usernameInput,
        password: passwordInput,
        
      },
      {withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });


      if (response.status === 200) {
        // setting token to be stored in cookie to persist user login
        const token = response.data.token;
        localStorage.setItem("token", token);
        Cookies.set("token", token, {secure: true, sameSite: "strict"});

        login(usernameInput, roleInput);
        setShowSuccess(true);


        setTimeout(() => navigate(roleInput === "ADMIN" ? "/admin" : "/"), 2500);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setShowError(true);
      if (error.response) {
        console.error("Server error message:", error.response.data);
      }
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {showError && <Alert severity="error">Login Failed</Alert>}
      {showSuccess && <Alert severity="success">Login Successful</Alert>}

      <div className="wrapper fadeInDown">
        <div id="formContent">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              className="fadeIn second"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <select id="role" value={role} onChange={handleRoleChange}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <Link className="underlineHover" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}