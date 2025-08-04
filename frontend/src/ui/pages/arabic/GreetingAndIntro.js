import React from "react";
import "../../css/text-styling.css";
import background from "../../media/cream-bg.jpg";
import arabMalesTalking from "../../media/arab-males-talking.jpg";
import arabMaleFemaleWork from "../../media/arab-male-female-work.jpg";

export default function GreetingsAndIntro() {

    return (
        <div>

            <div style={{ backgroundImage: `url(require(""../../media/cream-bg.jpg""))` }}> </div>
            
            <h1 style={{textAlign: "center", lineHeight: "150px", fontSize: "50px"}}><b>Lesson 1</b></h1>
            <p style={{textAlign: "left", marginLeft: "100px", fontSize: "20px"}}>This is our first lesson in the course! Congratulations on taking a big step towards learning something new!</p>
            <p style={{textAlign: "left", marginLeft: "100px", fontSize: "20px"}}> ⚫ In this lesson we will cover how to <b>greet someone</b> as well as <b>introduce yourself</b> in Fus'ha Arabic. Don't worry, we will make sure the learning is as smooth of a process as possible :) </p>
            <img style={{width: "450px", paddingRight: "100px", marginTop: "20px"}} src={arabMalesTalking} alt="logo" />
            <img style={{width: "420px", height: "230px", paddingLeft: "20px"}}src={arabMaleFemaleWork} alt="logo" />
            <div style={{marginTop: "30px"}}>
            <p> In the Arab world a very common greeting anyone will understand is </p>
            <p style={{textAlign: "center", lineHeight: "30px", fontSize: "50px"}}>ٱلسَّلَامُ عَلَيْكُمْ</p>
            <p> The romanization of this is <p style={{textAlign: "center", lineHeight: "30px", fontSize: "50px"}}>"Assalamu Aleikum"</p> which means "May Peace Be Upon You"</p>
            </div>
        </div>
    );
}
