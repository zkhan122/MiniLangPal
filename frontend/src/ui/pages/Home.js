import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([])

    const {id} = useParams(); // access parameters from the URL (function to hook into react state)

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    useEffect(()=> {
        console.log("Console: MiniLangApp loaded..")
        loadUsers();
    }, []); 

    const deleteUser = async (user_id) => {
        await axios.delete(`http://localhost:8080/users/${user_id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index)=> (
                            <tr>
                            <th scope="row" key={index}>Record{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link className="btn btn-primary mx-2" to={`/viewuser/${user.user_id}`}>View</Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/updateuser/${user.user_id}`}>Edit</Link>
                                <button className="btn btn-danger mx-2" onClick={()=> deleteUser(user.user_id)}>Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}