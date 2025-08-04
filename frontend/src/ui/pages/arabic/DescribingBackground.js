import React from "react";
import "../../css/text-styling.css";
import "../../css/greetings-intro.css";

export default function GreetingsAndIntro() {

    return (
        <div className="container">
          <h1 className="title">
            Fus'ha Arabic: Describing your background
          </h1>
      
          {/* Greetings */}
          <div className="section">
            <h2 className="greetings-title">Section: Country & Nationality</h2>
            <div className="card-container">
                <div>
                    <div>
                        <div className="intro-card">
                            <p className="arabic-text">من أين أنت ؟</p>
                            <p className="intro-romanization">"Min ayna ant?"</p>
                            <p className="translation">Where are you from?</p>
                        </div>
                        <div className="intro-card">
                            <p className="arabic-text">أَنَا مِن ...</p>
                            <p className="intro-romanization">"Ana min..."</p>
                            <p className="translation">I am from...</p>
                        </div>
                    </div>
              </div>
                <div>
                    <div>
                        <div className="intro-card">
                            <p className="arabic-text">مَا جِنْسِيَّتُكَ؟</p>
                            <p className="intro-romanization">"Maa jinseeya tooka?"</p>
                            <p className="translation">What is your nationality? (Asking Male)</p>
                        </div>

                        <div className="intro-card">
                            <p className="arabic-text">مَا جِنْسِيَّتُكِ؟</p>
                            <p className="intro-romanization">"Maa jinseeya tookee?"</p>
                            <p className="translation">What is your nationality? (Asking Female)</p>
                        </div>

                        <div className="intro-card">
                            <p className="arabic-text">أَنَا ...</p>
                            <p className="intro-romanization">"Ana..."</p>
                            <p className="translation">I am...</p>
                        </div>
                    </div>
              </div>

            </div>
          </div>
      
          {/* how to introduce yourself*/}
          <h2 className="intros-title">Section: Job / Title</h2>
          <div className="intro-card">
                <p className="arabic-text">بِمَ تَعْمَلُ؟</p>
                <p className="intro-romanization">"Bima ta3malu?"</p>
                <p className="translation">What do you work as?</p>
              </div>
              <div className="card-container">
              <div className="intro-card">
                <p className="arabic-text">... أعملُ كَـ</p>
                <p className="intro-romanization">"A3maloo ka ..."</p>
                <p className="translation">I work as ...</p>
              </div>
          </div>
        </div>
    );
};
