import React, { useEffect, useState } from "react"
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import background from "../media/main-logo.png";
import 'animate.css';
import AnimatedHello from "../component/AnimatedHello";
import "../css/themes.css";

export default function Home() {

    const [users, setUsers] = useState([])

    const {id} = useParams(); // access parameters from the URL (function to hook into react state)

    const loadUsers = async()=>{
  try {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  } catch (error) {
    console.error("Error loading users:", error);
  }
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
              <div className="animate__animated animate__fadeInLeft" style={{ backgroundImage: `url(${background})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "400px",
                            width: "100%",
                          }}>
              <AnimatedHello />
              </div>
              <p className="lora-subtitle"><b>Your mini language learning companion for learning dialects!</b></p>
        </div>
        <div className="btn-wrapper">
          <button className="block-btn lora-subtitle">
            <span>Explore the language catalogue</span>
          </button>
        </div>
      </div>
    )
}