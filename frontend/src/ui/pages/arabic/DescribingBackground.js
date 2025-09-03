import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";
import AudioSynthesizer from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/background-1.mp3";
import audio2 from "../../media/sounds/background-2.mp3";
import audio3 from "../../media/sounds/background-3.mp3";
import audio4 from "../../media/sounds/background-4.mp3";
import audio5 from "../../media/sounds/background-5.mp3";
import audio6 from "../../media/sounds/background-6.mp3";
import audio7 from "../../media/sounds/background-7.mp3";
import audio8 from "../../media/sounds/background-8.mp3";
import audio9 from "../../media/sounds/background-9.mp3";
import audio10 from "../../media/sounds/background-10.mp3";
import audio11 from "../../media/sounds/background-11.mp3";
import audio12 from "../../media/sounds/background-12.mp3";
import audio13 from "../../media/sounds/background-13.mp3";
import audio14 from "../../media/sounds/background-14.mp3";
import audio15 from "../../media/sounds/background-15.mp3";
import audio16 from "../../media/sounds/background-16.mp3";
import audio17 from "../../media/sounds/background-17.mp3";
import audio18 from "../../media/sounds/background-18.mp3";
import audio19 from "../../media/sounds/background-19.mp3";
import audio20 from "../../media/sounds/background-20.mp3";
import audio21 from "../../media/sounds/background-21.mp3";
import audio22 from "../../media/sounds/background-22.mp3";
import audio23 from "../../media/sounds/background-23.mp3";

export default function DescribingBackground() {
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
      <h1 className="title">Fus'ha Arabic: Describing your background</h1>
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
                <div>
                  <AudioSynthesizer audioFile={audio1} />
                </div>
              </div>
              <div className="greeting-card">
                <p className="arabic-text">...أَنَا مِن</p>
                <p className="intro-romanization">"Ana min..."</p>
                <p className="translation">I am from...</p>
                <div>
                  <AudioSynthesizer audioFile={audio2} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="greeting-card">
                <p className="arabic-text">مَا جِنْسِيَّتُكَ؟</p>
                <p className="intro-romanization">"Maa jin-seeya tooka?"</p>
                <p className="translation">
                  What is your nationality? (Asking Male)
                </p>
                <div>
                  <AudioSynthesizer audioFile={audio3} />
                </div>
              </div>

              <div className="greeting-card">
                <p className="arabic-text">مَا جِنْسِيَّتُكِ؟</p>
                <p className="intro-romanization">"Maa jin-seeya tookee?"</p>
                <p className="translation">
                  What is your nationality? (Asking Female)
                </p>
                <div>
                  <AudioSynthesizer audioFile={audio4} />
                </div>
              </div>

              <div className="greeting-card">
                <p className="arabic-text">...أَنَا</p>
                <p className="intro-romanization">"Ana..."</p>
                <p className="translation">I am...</p>
                <div>
                  <AudioSynthesizer audioFile={audio5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* example nationalities to follow ...أَنَا */}
      <h2 className="intros-title">example nationalities to follow ...أَنَا</h2>
      <p>
        {" "}
        Small note -{">"} When a female is referring to her nationality, just
        add a short "ya" sound at end
      </p>
      <div className="card-container">
        <div className="terms-card">
          <p className="arabic-text">بَاكِسْتَانِيّ</p>
          <p className="intro-romanization">"Baa-kis-tani"</p>
          <p className="translation">Pakistani (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio6} />
          </div>

          <p className="arabic-text">بَاكِسْتَانِيَّة</p>
          <p className="intro-romanization">
            "Baa-kis-tanee-
            <b>
              <u>ya</u>
            </b>
            "
          </p>
          <p className="translation">Pakistani (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio7} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">عَرَبِيّ</p>
          <p className="intro-romanization">"Arab-ee"</p>
          <p className="translation">Arab (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio8} />
          </div>

          <p className="arabic-text">عَرَبِيَّةُ</p>
          <p className="intro-romanization">
            "Arab-ee-
            <b>
              <u>ya</u>
            </b>
            "
          </p>
          <p className="translation">Arab (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio9} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">بِرِيطَانِيٌّ</p>
          <p className="intro-romanization">"Bri-tan-ee"</p>
          <p className="translation">British (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio10} />
          </div>

          <p className="arabic-text">بِرِيطَانِيَّةٌ</p>
          <p className="intro-romanization">
            "Bri-tan-ee-
            <b>
              <u>ya</u>
            </b>
            "
          </p>
          <p className="translation">British (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio11} />
          </div>
        </div>
      </div>
      {/* how to introduce yourself*/}
      <h2 className="intros-title">Section: Job / Title to follow ...أَنَا</h2>
      <div className="intro-card">
        <p className="arabic-text">بِمَ تَعْمَلُ؟</p>
        <p className="intro-romanization">"Bima ta3malu?"</p>
        <p className="translation">What do you work as?</p>
        <div>
          <AudioSynthesizer audioFile={audio12} />
        </div>
      </div>
      <div className="card-container">
        <div className="intro-card">
          <p className="arabic-text">... أعملُ كَـ</p>
          <p className="intro-romanization">"A3maloo ka ..."</p>
          <p className="translation">I work as ...</p>
          <div>
            <AudioSynthesizer audioFile={audio13} />
          </div>
        </div>
      </div>
      {/* terms for different roles and jobs */}
      <h2 className="intros-title">
        terms for roles and jobs to follow أعملُ كَـ OR أَنَا
      </h2>
      <p>
        {" "}
        Small note -{">"} When a female is referring to her job / role, just add
        a short "aa" sound at end
      </p>
      <div className="card-container">
        <div className="terms-card">
          <p className="arabic-text">مُهَندسٌ</p>
          <p className="intro-romanization">"Mu-han-dis"</p>
          <p className="translation">Engineer (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio14} />
          </div>

          <p className="arabic-text">مُهَنْدِسَةٌ</p>
          <p className="intro-romanization">
            "Mu-han-dis
            <b>
              <u>aa</u>
            </b>
            "
          </p>
          <p className="translation">Engineer (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio15} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">طَبِيبٌ</p>
          <p className="intro-romanization">"Tua-beeb"</p>
          <p className="translation">Doctor (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio16} />
          </div>

          <p className="arabic-text">طَبِيبَةٌ</p>
          <p className="intro-romanization">
            "Tua-beeb-
            <b>
              <u>aa</u>
            </b>
            "
          </p>
          <p className="translation">Doctor (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio17} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">مُعَلِّم</p>
          <p className="intro-romanization">"Moo-a3lim"</p>
          <p className="translation">Teacher (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio18} />
          </div>

          <p className="arabic-text">مُعَلِّمَ</p>
          <p className="intro-romanization">
            "Moo-a3lim
            <b>
              <u>aa</u>
            </b>
            "
          </p>
          <p className="translation">Teacher (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio19} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">طَالِبٌ</p>
          <p className="intro-romanization">"Tau-lib"</p>
          <p className="translation">Student (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio20} />
          </div>

          <p className="arabic-text">طَالِبَةٌ</p>
          <p className="intro-romanization">
            "Tau-lib
            <b>
              <u>aa</u>
            </b>
            "
          </p>
          <p className="translation">Student (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio21} />
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">عَامِل</p>
          <p className="intro-romanization">"A3-mil"</p>
          <p className="translation">Worker (Masculine)</p>
          <div>
            <AudioSynthesizer audioFile={audio22} />
          </div>

          <p className="arabic-text">عَامِلَة</p>
          <p className="intro-romanization">
            "A3-mil
            <b>
              <u>aa</u>
            </b>
            "
          </p>
          <p className="translation">Worker (Feminine)</p>
          <div>
            <AudioSynthesizer audioFile={audio23} />
          </div>
        </div>
      </div>
    </div>
  );
}
