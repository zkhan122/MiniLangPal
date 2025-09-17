import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ReadUser() {
    const [user, setUser] = useState({
        user_id: "",    
        name: "",
        username: "",
        email: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const { user_id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== "ADMIN") {
            window.location.replace("/login"); // Redirect non-admins
        }
    }, [user, navigate]);


    const API_BASE_URL = "http://localhost:8080"; //"https://minilangpal-backend-production.up.railway.app";

    const loadUser = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await axios.get(`${API_BASE_URL}/users/${user_id}`);
            setUser(result.data);
        } catch (err) {
            setError(err.response?.data?.message || "Error loading user");
            console.error("Error loading user:", err);
        } finally {
            setLoading(false);
        }
    }, [user_id]);

    useEffect(() => {
        loadUser();
    }, [loadUser]);

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container text-danger">Error: {error}</div>;

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
                    <Link className="btn btn-primary my-3" to={"/admin"}>Go back</Link>  
                </div>
            </div>
        </div>
    );
}