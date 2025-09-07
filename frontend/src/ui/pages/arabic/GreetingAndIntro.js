import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";
import AudioSynthesizer from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/greetings-1.mp3";
import audio2 from "../../media/sounds/greetings-2.mp3";
import audio3 from "../../media/sounds/greetings-3.mp3";
import audio4 from "../../media/sounds/greetings-4.mp3";
import audio5 from "../../media/sounds/greetings-5.mp3";
import audio6 from "../../media/sounds/greetings-6.mp3";
import audio7 from "../../media/sounds/greetings-7.mp3";
import audio8 from "../../media/sounds/greetings-8.mp3";
import audio9 from "../../media/sounds/greetings-9.mp3";
import audio10 from "../../media/sounds/greetings-10.mp3";
import audio11 from "../../media/sounds/greetings-11.mp3";

export default function GreetingsAndIntro() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.role) {
      window.location.replace("/login");
    }
  }, [user, navigate]);

  return (
    <div className="container">
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
      <h1 className="title">Arabic Greetings & Introductions</h1>
      {/* Greetings */}
      <div className="section">
        <h2 className="greetings-title">Section: Greetings</h2>
        <div className="card-container">
          <div>
            <div className="greeting-card">
              <p className="arabic-text">ٱلسَّلَامُ عَلَيْكُمْ</p>
              <p className="greeting-romanization">"Assalamu Aleikum"</p>
              <p className="translation">Peace be upon you</p>
              <div>
                <AudioSynthesizer audioFile={audio1} />
              </div>
            </div>
            <div className="greeting-card">
              <p className="arabic-text">وَعَلَيْكُم ٱلسَّلَامُ</p>
              <p className="greeting-romanization">"Waleikum-As-Salam"</p>
              <p className="translation">And upon you be Peace</p>
              <div>
                <AudioSynthesizer audioFile={audio2} />
              </div>
            </div>
          </div>
          <div className="greeting-card">
            <p className="arabic-text">مَرْحَبَا</p>
            <p className="greeting-romanization">"Mar-haban"</p>
            <p className="translation">Hello</p>
            <div>
              <AudioSynthesizer audioFile={audio3} />
            </div>
          </div>
          <div className="greeting-card">
            <p className="arabic-text">صَبَاح الْخَيْر</p>
            <p className="greeting-romanization">"Sabah al-khayr"</p>
            <p className="translation">Good morning</p>
            <div>
              <AudioSynthesizer audioFile={audio4} />
            </div>
          </div>
          <div className="greeting-card">
            <p className="arabic-text">طَابَ مَسَاؤُكَ</p>
            <p className="greeting-romanization">"Taab moosa ik"</p>
            <p className="translation">Good afternoon</p>
            <div>
              <AudioSynthesizer audioFile={audio5} />
            </div>
          </div>
          <div className="greeting-card">
            <p className="arabic-text">طَابَت لَيْلَتُكَ</p>
            <p className="greeting-romanization">"Taabat layla took"</p>
            <p className="translation">Good night</p>
            <div>
              <AudioSynthesizer audioFile={audio6} />
            </div>
          </div>
        </div>

        {/* Asking how someone is */}
        <h2 className="intros-title">Asking how someone is ("haal")</h2>
        <div className="card-container">
          <div className="green-card">
            <p className="arabic-text">كَيْفَ حالُكَ؟</p>
            <p className="greeting-romanization">"Kayfa-halooka?"</p>
            <p className="translation">How are you? (Asking Male)</p>
            <div>
              <AudioSynthesizer audioFile={audio7} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">كَيْفَ حالُكِ؟</p>
            <p className="greeting-romanization">"Kayfa-halookee?"</p>
            <p className="translation">How are you? (Asking Female)</p>
            <div>
              <AudioSynthesizer audioFile={audio9} />
            </div>
          </div>

          <div className="green-card">
            <p className="arabic-text">أَنا بِخَيْرٍ، الْحَمْدُ لِلَّهِ</p>
            <p className="greeting-romanization">"Ana bi-khayr Alhamdulilah"</p>
            <p className="translation">I am good, praise be to God</p>
            <div>
              <AudioSynthesizer audioFile={audio8} />
            </div>
          </div>
        </div>

        {/* how to introduce yourself*/}
        <h2 className="intros-title">Section: Introductions</h2>
        <div className="intro-card">
          <p className="arabic-text">مَا اسْمُك؟</p>
          <p className="intro-romanization">"Ma is-muk?"</p>
          <p className="translation">What is your name?</p>
          <div>
            <AudioSynthesizer audioFile={audio10} />
          </div>
        </div>
        <div className="card-container">
          <div className="intro-card">
            <p className="arabic-text">... اسْمِي</p>
            <p className="intro-romanization">"Ismi..."</p>
            <p className="translation">My name is...</p>
            <div>
              <AudioSynthesizer audioFile={audio11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
