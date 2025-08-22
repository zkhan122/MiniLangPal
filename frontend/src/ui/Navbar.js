import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./context/UserContext";
import "./css/navbar.css";
import "./css/themes.css";
import logo from "./media/logo-pic.png";

export default function Navbar() {
    const { user, logout } = useUser();

    return (
        <div>
            <nav className="navbar navbar-expand-lg gradient-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand lora-logo" to={"/"}><img src={logo} height="50" className="d-inline-block d-align-top"/> MiniLangPal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav navbar-nav navbar-right">
                    {user ? (
                        <> 
                            <li className="nav-item">
                                <span className="navbar-text me-3">{user.username}</span>
                            </li>

                            <Link className="btn btn-outline-light" to="/quizzes">My Diagnostic Quizzes</Link>
                            <Link className="btn btn-outline-light" to="/learning">My Learning</Link>

                            <li className="nav-item">
                                <button className="btn btn-outline-light" onClick={logout}>Log Out</button>
                            </li>
                        </>

                    ) : (
                        <>
                            <Link className="btn btn-outline-light" to="/adduser">Register</Link>
                            <Link className="btn btn-outline-light" to="/login">Login</Link>
                        </>
                    )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}