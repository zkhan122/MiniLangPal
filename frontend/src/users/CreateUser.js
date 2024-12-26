import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateUser() {
    const navigate = useNavigate(); // link navigation

    // storing the user information inside state to POST
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phoneNumber:"",
    })

    const onInputChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setUser({
            name: user.name,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            [fieldName]: fieldValue
        });
    };

    const{name,username,email, phoneNumber} = user;

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:8080/users", user);
        navigate("/");
    }




    return (
        <div className="container">
            <h1>Create User Page</h1>
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
                            <label htmlFor="phoneNumber" className="form-label">
                                Phone Number:
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Enter your phone number"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={onInputChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={() => navigate('/')}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )

}