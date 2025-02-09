import React from "react";
import { Link } from "react-router-dom";
import { Username } from "./context/UserContext";

export default function Navbar() {

    const { username, setUsername } = Username();

    // for logging the user out

    const handleLogout = () => {
        setUsername(""); // setting the username back to empty
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>MiniLangPal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul class="nav navbar-nav navbar-right">
                    {username ? (
                        <> 
                            <li className="nav-item">
                                <span className="navbar-text me-3">{username}</span>
                            </li>

                            <Link className="btn btn-outline-light" to="/quizzes">My Quizzes</Link>
                            <Link className="btn btn-outline-light" to="/learning">My Learning</Link>

                            <li className="nav-item">
                                <button className="btn btn-outline-light" onClick={handleLogout}>Log Out</button>
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