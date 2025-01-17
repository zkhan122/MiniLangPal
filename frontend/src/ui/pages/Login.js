import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import '../css/login.css';

export default function Login() {

    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
      const [showError, setShowError] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
    

      var usernameInput = document.getElementById("username").value;
      var passwordInput = document.getElementById("password").value;

      if ((usernameInput == null || usernameInput == "") || (passwordInput == null || passwordInput == "")) {
        console.log("Please fill in all fields");
        setShowError(true);
        setTimeout(()=>navigate('/'), 2000);
        return;
      }
      else if (usernameInput === "admin" && passwordInput === "admin") {
        console.log("Login successful");
        setShowSuccess(true);
        setTimeout(()=>navigate('/'), 2500);
      
      } else { // change to check database to see if the user exists with the given username and password
        console.log('(admin only for now) Login attempt with:', {usernameInput, passwordInput});
        setShowError(true);
        setTimeout(()=>navigate('/login'), 2500);
      
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