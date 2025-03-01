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
                <p>Hello World</p>
            </div>
        </div>
    )
}