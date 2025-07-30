import React from "react";
import "../../css/text-styling.css";

export default function GreetingsAndIntro() {
    const introStyle = {
        backgroundImage: "url('/media/cream-bg.jpg')",
        height: "100vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    };

    return (
        <div>
            
            <p>How do you greet someone in Arabic?</p>
            <p> Or </p>
            <p> How do you introduce yourself in Arabic?</p>
            <p> Let's find out!</p>

            <p> In the Arab world a very common greeting anyone will understand is </p>
            <p style={{textAlign: "center", lineHeight: "30px", fontSize: "50px"}}>ٱلسَّلَامُ عَلَيْكُمْ</p>
            <p> The romanization of this is <p style={{textAlign: "center", lineHeight: "30px", fontSize: "50px"}}>"Assalamu Aleikum"</p> which means "May Peace Be Upon You"</p>
        </div>
    );
}
