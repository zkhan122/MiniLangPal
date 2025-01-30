import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from '@mui/material/Alert';
import { useParams } from "react-router-dom";

export default function UpdateUser() {
    const navigate = useNavigate(); // link navigation

    const {user_id} = useParams(); // getting the user_id from the URL

    // storing the user information insuser_ide state to POST
    const [user, setUser] = useState({ // we store the user info in user and set using setUser
        name:"",
        username:"",
        email:"",
        password: "",
    })

    const [confirmPassword, setConfirmPassword] = useState("");

    const onInputChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setUser((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    };

    useEffect(() => {
        if (!user_id || user_id === 'undefined') {
            console.error("Invaluser_id user user_id");
            navigate('/'); // Redirect to home if invaluser_id user_id
            return;
        }
        loadUser();
    }, [user_id, navigate]);

    const onConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const{name,username,email, password} = user;

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setShowError(true);
            // alert("Passwords do not match");
            return;
        } else {
            // if password do match, then we can post the user by submitting the form
            await axios.put(`http://localhost:8080/users/${user_id}`, user);
            setShowSuccess(true);
            setTimeout(()=>navigate('/'), 2000);
        }
    }

    const loadUser =async()=> {
        const result = await axios.get(`http://localhost:8080/users/${user_id}`);
        setUser(result.data);  
    }

    return (
        <div className="container">
            <h1>User Page</h1>
            {showError && <Alert severity="error">Passwords do not match</Alert>}
            {showSuccess && <Alert severity="success">User profile updated!</Alert>}
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Update User</h2>
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
                                type="text"
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
                                type="text"
                                className="form-control"
                                placeholder="Renter your password"
                                name="password2"
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange}
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