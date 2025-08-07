import React from "react";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";

export default function GreetingsAndIntro() {

    return (
        <div className="container">
          <h1 className="title">
            Arabic Greetings & Introductions
          </h1>
      
          {/* Greetings */}
          <div className="section">
            <h2 className="greetings-title">Section: Greetings</h2>
            <div className="card-container">
                <div>
              <div className="greeting-card">
                <p className="arabic-text">ٱلسَّلَامُ عَلَيْكُمْ</p>
                <p className="greeting-romanization">"Assalamu Aleikum"</p>
                <p className="translation">Peace be upon you</p>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">وَعَلَيْكُم ٱلسَّلَامُ</p>
                <p className="greeting-romanization">"Waleikum-As-Salam"</p>
                <p className="translation">And upon you be Peace</p>
              </div>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">مَرْحَبَا</p>
                <p className="greeting-romanization">"Mar-haban"</p>
                <p className="translation">Hello</p>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">صَبَاح الْخَيْر</p>
                <p className="greeting-romanization">"Sabah al-khayr"</p>
                <p className="translation">Good morning</p>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">طَابَ مَسَاؤُكَ</p>
                <p className="greeting-romanization">"Taab moosa ik"</p>
                <p className="translation">Good afternoon</p>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">طَابَت لَيْلَتُكَ</p>
                <p className="greeting-romanization">"Taabat layla took"</p>
                <p className="translation">Good night</p>
              </div>
            </div>

            {/* Asking how someone is */}
            <h2 className="intros-title">Asking how someone is ("haal")</h2>
            <div className="card-container">
              <div className="green-card">
                <p className="arabic-text">كَيْفَ حالُكَ؟</p>
                <p className="greeting-romanization">"Kayfa-halooka?"</p>
                <p className="translation">How are you? (Asking Male)</p>
              </div>
              <div className="green-card">
                <p className="arabic-text">كَيْفَ حالُكِ؟</p>
                <p className="greeting-romanization">"Kayfa-halookee?"</p>
                <p className="translation">How are you? (Asking Female)</p>
              </div>

              <div className="green-card">
                <p className="arabic-text">أَنا بِخَيْرٍ، الْحَمْدُ لِلَّهِ</p>
                <p className="greeting-romanization">"Ana bi-khayr Alhamdulilah"</p>
                <p className="translation">I am good, praise be to God</p>
              </div>
            </div>
      
          {/* how to introduce yourself*/}
          <h2 className="intros-title">Section: Introductions</h2>
          <div className="intro-card">
                <p className="arabic-text">مَا اسْمُك؟</p>
                <p className="intro-romanization">"Ma is-muk?"</p>
                <p className="translation">What is your name?</p>
              </div>
              <div className="card-container">
              <div className="intro-card">
                <p className="arabic-text">... اسْمِي</p>
                <p className="intro-romanization">"Ismi..."</p>
                <p className="translation">My name is...</p>
              </div>
            <div>
              {/* <div className="intro-card">
                <p className="arabic-text">من أين أنت ؟</p>
                <p className="intro-romanization">"Min ayna ant?"</p>
                <p className="translation">Where are you from?</p>
              </div> */}
            </div>
          </div>
        </div>
        </div>
    );
};
