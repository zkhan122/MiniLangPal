import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

import AudioSynthesizer from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/verbs-1.mp3";
import audio2 from "../../media/sounds/verbs-2.mp3";
import audio3 from "../../media/sounds/verbs-3.mp3";
import audio4 from "../../media/sounds/verbs-4.mp3";
import audio5 from "../../media/sounds/verbs-5.mp3";
import audio6 from "../../media/sounds/verbs-6.mp3";
import audio7 from "../../media/sounds/verbs-7.mp3";
import audio8 from "../../media/sounds/verbs-8.mp3";
import audio9 from "../../media/sounds/verbs-9.mp3";
import audio10 from "../../media/sounds/verbs-10.mp3";
import audio11 from "../../media/sounds/verbs-11.mp3";
import audio12 from "../../media/sounds/verbs-12.mp3";
import audio13 from "../../media/sounds/verbs-13.mp3";
import audio14 from "../../media/sounds/verbs-14.mp3";
import audio15 from "../../media/sounds/verbs-15.mp3";
import audio16 from "../../media/sounds/verbs-16.mp3";
import audio17 from "../../media/sounds/verbs-17.mp3";
import audio18 from "../../media/sounds/verbs-18.mp3";

export default function SentencesWithVerbs() {
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
      <h1 className="title">Using Sentences With Verbs</h1>
      <div className="section">
        {/* <h2 className="intros-title">Section: Example verbs</h2> */}
        <br></br>
        <p>
          In Arabic, verbs change their form depending on who is performing the
          action. This section shows how common verbs are conjugated with
          pronouns like I, he, and she to form basic sentences.
        </p>

        <p>Verbs for "I" start with "aa" sounds</p>
        <p>Verbs for "He" start with "ya" sounds</p>
        <p>Verbs for "She" start with "ta" sounds</p>

        <h2 className="intros-title">Using the verb "to work" (يَعْمَلُ)</h2>
        <div className="card-container">
          <div className="green-card">
            <p className="arabic-text">أَنَا أَعْمَلُ</p>
            <p className="intro-romanization">"Ana a3-malu"</p>
            <p className="translation">I work / I am working.</p>
            <div>
              <AudioSynthesizer audioFile={audio1} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">هُوَ يَعْمَلُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              -malu"
            </p>
            <p className="translation">He works / He is working .</p>
            <div>
              <AudioSynthesizer audioFile={audio2} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">هِيَ تَعْمَلُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              -malu"
            </p>
            <p className="translation">She works / She is working.</p>
            <div>
              <AudioSynthesizer audioFile={audio3} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Using the verb "to live" (يَسْكُنُ)</h2>
        <div className="card-container">
          <div className="terms-card">
            <p className="arabic-text">أَنَا أَسْكُنُ</p>
            <p className="intro-romanization">"Ana as-kunoo"</p>
            <p className="translation">I live / I am living.</p>
            <div>
              <AudioSynthesizer audioFile={audio4} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">هُوَ يَسْكُنُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              s-kunoo"
            </p>
            <p className="translation">He lives / He is living.</p>
            <div>
              <AudioSynthesizer audioFile={audio5} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">هِيَ تَسْكُنُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              -skun-oo"
            </p>
            <p className="translation">She lives / She is living.</p>
            <div>
              <AudioSynthesizer audioFile={audio6} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Using the verb "to eat" (يَأْكُلُ)</h2>
        <div className="card-container">
          <div className="intro-card">
            <p className="arabic-text">أَنَا آكُلُ</p>
            <p className="intro-romanization">"Ana aakuloo"</p>
            <p className="translation">I eat / I am eating.</p>
            <div>
              <AudioSynthesizer audioFile={audio7} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">هُوَ يَأْكُلُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              '-kul-oo"
            </p>
            <p className="translation">He eats / He is eating.</p>
            <div>
              <AudioSynthesizer audioFile={audio8} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">هِيَ تَأْكُلُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              -kul-oo"
            </p>
            <p className="translation">She eats / She is eating.</p>
            <div>
              <AudioSynthesizer audioFile={audio9} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Using the verb "to drink" (يَشْرَبُ)</h2>
        <div className="card-container">
          <div className="green-card">
            <p className="arabic-text">أَنَا أَشْرَبُ</p>
            <p className="intro-romanization">"Ana ash-raboo"</p>
            <p className="translation">I drink / I am drinking.</p>
            <div>
              <AudioSynthesizer audioFile={audio10} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">هُوَ يَشْرَبُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              sh-raboo"
            </p>
            <p className="translation">He drinks / He is drinking</p>
            <div>
              <AudioSynthesizer audioFile={audio11} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">هِيَ تَشْرَبُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              sh-raboo"
            </p>
            <p className="translation">She drinks / She is drinking</p>
            <div>
              <AudioSynthesizer audioFile={audio12} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Using the verb "to study" (يَدْرُسُ)</h2>
        <div className="card-container">
          <div className="terms-card">
            <p className="arabic-text">أَنَا أَدْرُسُ</p>
            <p className="intro-romanization">"Ana ad-rus-oo"</p>
            <p className="translation">I study / I am studying</p>
            <div>
              <AudioSynthesizer audioFile={audio13} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">هُوَ يَدْرُسُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              d-rus-oo"
            </p>
            <p className="translation">He studies / He is studying</p>
            <div>
              <AudioSynthesizer audioFile={audio14} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">هِيَ تَدْرُسُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              d-rus-oo"
            </p>
            <p className="translation">She studies / She is studying</p>
            <div>
              <AudioSynthesizer audioFile={audio15} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Using the verb "to write" (يَكْتُبُ)</h2>
        <div className="card-container">
          <div className="intro-card">
            <p className="arabic-text">أَنَا أَكْتُبُ</p>
            <p className="intro-romanization">"Ana ak-tu-boo"</p>
            <p className="translation">I write / I am writing</p>
            <div>
              <AudioSynthesizer audioFile={audio16} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">هُوَ يَكْتُبُ</p>
            <p className="intro-romanization">
              "Hu-wa{" "}
              <b>
                <u>ya</u>
              </b>
              k-tu-boo"
            </p>
            <p className="translation">He writes / He is writing</p>
            <div>
              <AudioSynthesizer audioFile={audio17} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">هِيَ تَكْتُبُ</p>
            <p className="intro-romanization">
              "Hi-ya{" "}
              <b>
                <u>ta</u>
              </b>
              k-tu-boo"
            </p>
            <p className="translation">She writes / She is writing</p>
            <div>
              <AudioSynthesizer audioFile={audio18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
