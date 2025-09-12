import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import axios from "axios";
import '../css/login.css';
import { useUser } from "../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const { login, user } = useUser();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const API_BASE_URL = "https://minilangpal-backend-production.up.railway.app";

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

    const roleInput = role;
    const usernameInput = username;
    const passwordInput = password;

    if (!usernameInput || !passwordInput || !roleInput) {
      setShowError(true);
      return;
    }

    try {
        const endpoint = roleInput === "ADMIN" ? "admin/login-attempt" : "users/login-attempt";
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, {
        username: usernameInput,
        password: passwordInput,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.status === 200) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith('JSESSIONID=')) {
            const sessionId = cookie.substring('JSESSIONID='.length, cookie.length);
            sessionStorage.setItem('sessionId', sessionId);
            break;
          }
        }
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
      <h1 style={{ paddingTop: 44 }}>
        Login
      </h1>
      {showError && <Alert severity="error">Login Failed</Alert>}
      {showSuccess && <Alert severity="success">Login Successful</Alert>}

      {user ? (
        <p> You are already logged in.</p>
      ) : (
        <div className="wrapper fadeInDown">
          <div
            id="formContent"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
              <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="form-label">
                  Username:
                </label>
              <input
                type="text"
                id="username"
                className="fadeIn second"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
                required
                />
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
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
              <button className="forgot-password" onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </button>
            </div>
          </div>
      )}
    </div>
  );
}