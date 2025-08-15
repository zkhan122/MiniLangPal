import React from "react";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";

export default function SentencesWithPronouns() {
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
                </div>
                <div className="green-card">
                    <p className="arabic-text">أَنَا مُعَلِّمَةٌ</p>
                    <p className="greeting-romanization">"Ana mu'alim-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">I am a teacher (female).</p>
                </div>
            </div>
            
            <div className="card-container">
                <div className="green-card">
                    <p className="arabic-text">هُوَ طَالِبٌ</p>
                    <p className="greeting-romanization">"Hu-wa taa-lib-un"</p>
                    <p className="translation">He is a student.</p>
                </div>
                <div className="green-card">
                    <p className="arabic-text">هِيَ طَالِبَةٌ</p>
                    <p className="greeting-romanization">"Hi-ya tau-lib-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">She is a student.</p>
                </div>
            </div>

            <div className="card-container">
                <div className="green-card">
                    <p className="arabic-text">أَنْتَ مَهَنْدِسٌ</p>
                    <p className="greeting-romanization">"An-ta mu-han-dis-un"</p>
                    <p className="translation">You are an engineer (male).</p>
                </div>
                <div className="green-card">
                    <p className="arabic-text">أَنْتِ مَهَنْدِسَةٌ</p>
                    <p className="greeting-romanization">"An-ti mu-han-dis-<b><u>aa</u></b>(tun)"</p>
                    <p className="translation">You are an engineer (female).</p>
                </div>
            </div>
        </div>
    </div>
  );
}