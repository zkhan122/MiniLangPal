import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "../../css/text-styling.css";

export default function Introduction() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.role) {
      window.location.replace("/login");
    }
  }, [user, navigate]);

  const introStyle = {
    backgroundImage: "url('/media/cream-bg.jpg')",
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Link
        className="px-6 py-2 text-lg border-2 border-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-lg bg-blue-500 font-bold"
        to="/"
      >
        🡨 Home
      </Link>{" "}
      <Link
        className="px-6 py-2 text-lg border-2 border-white text-black hover:bg-white hover:text-black transition-colors duration-300 rounded-lg bg-blue-500 font-bold"
        to="/learning"
      >
        🡨 Back
      </Link>
      <div class="fade-in-text">
        <p> Welcome! </p>
      </div>
      <div>
        <p>
          Hey there! Ready to learn the Arabic dialect that connects the entire
          Arab world?
        </p>
        <p>
          Fus'ha Arabic (a.k.a Classical/ or MSA) is seen as the Arabic dialect
          that is used in news channels, in books, in formal conversations, in
          Islamic lectures by scholars and also in the Holy Quran !
        </p>
      </div>
      <div style={{ textAlign: "center", marginLeft: "30px" }}>
        <h3>What you'll learn:</h3>
      </div>
      <div style={{ textAlign: "center", lineHeight: "30px" }}>
        <div style={{ textAlign: "center", lineHeight: "1.5" }}>
          <p style={{ margin: "8px 0" }}>• Greetings and Introductions</p>
          <p style={{ margin: "8px 0" }}>
            • Talking about yourself and your background
          </p>
          <p style={{ margin: "8px 0" }}>
            • Basic sentence structures with pronouns and verbs
          </p>
          <p style={{ margin: "8px 0" }}>• Describing your family</p>
          <p style={{ margin: "8px 0" }}>
            • Asking questions based on scenarios
          </p>
        </div>
      </div>
    </div>
  );
}
