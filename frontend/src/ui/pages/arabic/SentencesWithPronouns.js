import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";
import AudioSynthesizer  from "../../utils/AudioTTSSynthesizer";    
import audio1 from "../../media/sounds/pronouns-1.mp3";
import audio2 from "../../media/sounds/pronouns-2.mp3";
import audio3 from "../../media/sounds/pronouns-3.mp3";
import audio4 from "../../media/sounds/pronouns-4.mp3";
import audio5 from "../../media/sounds/pronouns-5.mp3";
import audio6 from "../../media/sounds/pronouns-6.mp3";

export default function SentencesWithPronouns() {

    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.role) {
            window.location.replace("/login");
        }
    }, [user, navigate]);

  return (
    <div className="container">
      <h1 className="title">Fus'ha Arabic: Forming Sentences With Pronouns</h1>

        <div className="section">
            <h2 className="intros-title">Section: Example Sentences</h2>
            <p>
            In Arabic, we use different pronouns to refer to ourselves and others.
            Here are some examples of how to build simple sentences using these pronouns.
            </p>

            <p>Note: When a female is speaking or is being spoken to, the "taa" or "tun" can remain silent</p>

            <div className="card-container">
                <div className="green-card">
                    <p className="arabic-text">أَنَا مُعَلِّمٌ</p>
                    <p className="greeting-romanization">"Ana mu'allim-un"</p>
                    <p className="translation">I am a teacher (male).</p>
                    <div>
                        <AudioSynthesizer audioFile={audio1}/>
                    </div>
                    </div>
                </div>
                <div className="green-card">
                    <p className="arabic-text">أَنَا مُعَلِّمَةٌ</p>
                    <p className="greeting-romanization">"Ana mu'alim-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">I am a teacher (female).</p>
                    <div>
                        <AudioSynthesizer audioFile={audio2}/>
                    </div>
            
                </div>
            </div>
            
            <div className="card-container">
                <div className="green-card">
                    <p className="arabic-text">هُوَ طَالِبٌ</p>
                    <p className="greeting-romanization">"Hu-wa taa-lib-un"</p>
                    <p className="translation">He is a student.</p>
                    <div>
                        <AudioSynthesizer audioFile={audio3}/>
                    </div>
                </div>
                <div className="green-card">
                    <p className="arabic-text">هِيَ طَالِبَةٌ</p>
                    <p className="greeting-romanization">"Hi-ya tau-lib-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">She is a student.</p>
                    <div>
                        <AudioSynthesizer audioFile={audio4}/>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="green-card">
                    <p className="arabic-text">أَنْتَ مَهَنْدِسٌ</p>
                    <p className="greeting-romanization">"An-ta mu-han-dis-un"</p>
                    <p className="translation">You are an engineer (male).</p>
                    <div>
                        <AudioSynthesizer audioFile={audio5}/>
                    </div>
                </div>
                <div className="green-card">
                    <p className="arabic-text">أَنْتِ مَهَنْدِسَةٌ</p>
                    <p className="greeting-romanization">"An-ti mu-han-dis-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">You are an engineer (female).</p>
                    <div>
                        <AudioSynthesizer audioFile={audio6}/>
                    </div>
                </div>
            </div>
        </div>
  );
};