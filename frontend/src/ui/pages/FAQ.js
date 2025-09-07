import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../css/text-styling.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleCard from "../component/CollapsibleCard";

export default function FAQ() {
  const { user } = useUser();
  const navigate = useNavigate();


  const [result, setResult] = React.useState("");

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    if (!user || !user.role) {
      window.location.replace("/login");
    }
  }, [user, navigate]);

const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    await delay(2000);  
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      // This block catches network errors or issues with the fetch request itself
      console.error("Network or fetch error:", error);
      setResult("Try again later");
    }
  };


  return (
    <div className="App">
      <h1>FAQs (Frequently Asked Questions)</h1>
      
      <CollapsibleCard title="Why MiniLangPal?">
        <p>This web app was developed as a solution to be able to learn dialects or less known languages in a simpler way. For example for Fus'ha Arabic in order to learn the few basics you need to either 1) Study the Madinah Arabic/Arabiyya Bayna Yadayk books & self study through teachers on youtube such as Imran Aliwiye (a very good teacher!) or 2) Go to an arabic academy that specialises in Fus'ha Arabic ...but how do you actually retain all that information? Here is MiniLangPal!</p>
      </CollapsibleCard>

      <CollapsibleCard title="What is different about MiniLangPal compared to other solutions out there?">
        <p>Current websites which teach dialects (taking Fus'ha Arabic as an example again - Madinah Arabic is an example website) are highly detailed but lack retention functionality. This hinders the acceleration of being able to allow the brain to piece together what you have learnt in the past. We make use of interactive quizzes and have laid the content out in a minimalistic way as well as synthesized AI audio playback.</p>
      </CollapsibleCard>

      <CollapsibleCard title="What is the tech stack used?">
        <ul>
          <li>Backend: Java SpringBoot</li>
          <li>Frontend: ReactJS</li>
          <li>Database: MySQL</li>
          <li>Frameworks: Bootstrap, TailwindCSS</li>
          <li>Deployment: Docker multi-containerization + Railway</li>
        </ul>
      </CollapsibleCard>

      {/* <form onSubmit={onSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Form</button>
      </form> */}

        <p>If you have any additional queries or bug reports, please forward them to: zayaankashif246@gmail.com</p>
    </div>
  );
}