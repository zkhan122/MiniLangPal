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
            <Link className="navbar-brand lora-logo" to={"/"}>
              <img
                src={logo}
                height="50"
                className="d-inline-block d-align-top"
              />{" "}
              MiniLangPal
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="nav navbar-nav navbar-right">
              {user ? (
                <>
                  <li className="nav-item d-flex align-items-center me-3">
                    <span className="navbar-text">{user.username}</span>
                  </li>

                  <Link className="nav-link" to="/quizzes">
                    My Diagnostic Quizzes
                  </Link>
                  <Link className="nav-link" to="/learning">
                    My Learning
                  </Link>

                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/adduser">
                    Register
                  </Link>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
}