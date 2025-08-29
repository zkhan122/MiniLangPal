import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import logo from "../media/logo-pic.png";
import background from "../media/bg-image.png";
import "animate.css";
import AnimatedHello from "../component/AnimatedHello";
import "../css/themes.css";

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams(); // access parameters from the URL (function to hook into react state)

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  useEffect(() => {
    console.log("Console: MiniLangApp loaded..");
    loadUsers();
  }, []);

  return (
    <div>
      <div>
        <div
          className="animate__animated animate__fadeIn"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <img
            src={logo}
            style={{
              maxHeight: "300px",
              maxWidth: "100%",
              paddingTop: 30,
            }}
          />
          <AnimatedHello />
          <h1 className="lora-logo">MiniLangPal</h1>
          <p style={{ paddingTop: "40px" }}>
            <b>Your mini language learning companion for learning dialects!</b>
          </p>
          <div className="btn-wrapper">
            <Link to="/languages">
              <button className="block-btn lora-subtitle">
                <span>Explore the language catalogue</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
