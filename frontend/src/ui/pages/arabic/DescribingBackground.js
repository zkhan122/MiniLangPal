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
                        <div className="greeting-card">
                            <p className="arabic-text">من أين أنت ؟</p>
                            <p className="intro-romanization">"Min ayna ant?"</p>
                            <p className="translation">Where are you from?</p>
                        </div>
                        <div className="greeting-card">
                            <p className="arabic-text">أَنَا مِن ...</p>
                            <p className="intro-romanization">"Ana min..."</p>
                            <p className="translation">I am from...</p>
                        </div>
                    </div>
              </div>
                <div>
                    <div>
                        <div className="greeting-card">
                            <p className="arabic-text">مَا جِنْسِيَّتُكَ؟</p>
                            <p className="intro-romanization">"Maa jin-seeya tooka?"</p>
                            <p className="translation">What is your nationality? (Asking Male)</p>
                        </div>

                        <div className="greeting-card">
                            <p className="arabic-text">مَا جِنْسِيَّتُكِ؟</p>
                            <p className="intro-romanization">"Maa jin-seeya tookee?"</p>
                            <p className="translation">What is your nationality? (Asking Female)</p>
                        </div>

                        <div className="greeting-card">
                            <p className="arabic-text">أَنَا ...</p>
                            <p className="intro-romanization">"Ana..."</p>
                            <p className="translation">I am...</p>
                        </div>
                    </div>
              </div>

            </div>
          </div>

        {/* terms for different roles and jobs */}
          <h2 className="intros-title">Terms for roles and jobs:</h2>
          <p> Small note -> When referring to a female with a job / role, just add a short "aa" sound at end</p>

          <div className="card-container">
              <div className="terms-card">
                  <p className="arabic-text">مهندس</p>
                  <p className="intro-romanization">"Mu-han-dis"</p>
                  <p className="translation">Engineer (Masculine)</p>

                  <p className="arabic-text">مهندسة</p>
                  <p className="intro-romanization">"Mu-han-dis<b><u>aa</u></b>"</p>
                  <p className="translation">Engineer (Feminine)</p>
              </div>

              <div className="terms-card">
                  <p className="arabic-text">طبيب</p>
                  <p className="intro-romanization">"Tua-beeb"</p>
                  <p className="translation">Doctor (Masculine)</p>

                  <p className="arabic-text">طبيبة</p>
                  <p className="intro-romanization">"Tua-beeb-<b><u>aa</u></b>"</p>
                  <p className="translation">Doctor (Feminine)</p>
              </div>

              <div className="terms-card">
                  <p className="arabic-text">مُعَلِّم</p>
                  <p className="intro-romanization">"Moo-a3lim"</p>
                  <p className="translation">Teacher (Masculine)</p>

                  <p className="arabic-text">مُعَلِّمَ</p>
                  <p className="intro-romanization">"Moo-a3lim<b><u>aa</u></b>"</p>
                  <p className="translation">Teacher (Feminine)</p>
              </div>

              <div className="terms-card">
                  <p className="arabic-text">مهندس</p>
                  <p className="intro-romanization">"Mu-han-dis"</p>
                  <p className="translation">Engineer (Masculine)</p>

                  <p className="arabic-text">مهندسة</p>
                  <p className="intro-romanization">"Mu-han-di<b><u>sa</u></b>"</p>
                  <p className="translation">Engineer (Feminine)</p>
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
