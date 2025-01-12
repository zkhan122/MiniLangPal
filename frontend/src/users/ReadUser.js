import React, { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";
import axios from "axios";

export default function ReadUser() {

    const [user, setUser] = useState({
        user_id: "",    
        name: "",
        username: "",
        email: ""
    });

    const {user_id} = useParams();

    useEffect(() => {
        loadUser();
    }, [user_id]);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${user_id}`);
        setUser(result.data);
    };

    return (
        <div className="container">
            <h1>User Page</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            <h4>User ID in database: {user.user_id}</h4>
                        </div>
                        <div className="card-body">
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </div>
                    </div>
                    <Link className="btn btn-primary" to={"/"}>Back to Home</Link>   
                </div>
            </div>
        </div>
    );
}