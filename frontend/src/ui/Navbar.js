import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>MiniLangPal</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul class="nav navbar-nav navbar-right">
                    <Link className="btn btn-outline-light" to="/adduser">Register</Link>
                    <Link className="btn btn-outline-light" to="/login">Login</Link>
                    </ul>

                </div>
            </nav>

        </div>
    )
}