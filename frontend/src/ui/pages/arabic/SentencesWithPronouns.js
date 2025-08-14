import React from "react";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";

export default function ThisThat() {
  return (
    <div className="container">
      <h1 className="title">Fus'ha Arabic: This & That</h1>

/* Section for Sentences with Pronouns */
<div className="section">
    <h2 className="intros-title">Section: Sentences with Pronouns</h2>
    <p>
      In Arabic, we use different pronouns to refer to ourselves and others.
      Here are some examples of how to build simple sentences using these pronouns.
    </p>

    <div className="card-container">
        <div className="terms-card">
            <p className="arabic-text">أَنَا مُعَلِّمٌ</p>
            <p className="intro-romanization">"Ana mu'allim-un"</p>
            <p className="translation">I am a teacher (male).</p>
        </div>
        <div className="terms-card">
            <p className="arabic-text">أَنَا مُعَلِّمَةٌ</p>
            <p className="intro-romanization">"Ana mu'allima-tun"</p>
            <p className="translation">I am a teacher (female).</p>
        </div>
    </div>
    
    <div className="card-container">
        <div className="terms-card">
            <p className="arabic-text">هُوَ طَالِبٌ</p>
            <p className="intro-romanization">"Hu-wa taa-lib-un"</p>
            <p className="translation">He is a student.</p>
        </div>
        <div className="terms-card">
            <p className="arabic-text">هِيَ طَالِبَةٌ</p>
            <p className="intro-romanization">"Hi-ya taa-liba-tun"</p>
            <p className="translation">She is a student.</p>
        </div>
    </div>

    <div className="card-container">
        <div className="terms-card">
            <p className="arabic-text">أَنْتَ مَهَنْدِسٌ</p>
            <p className="intro-romanization">"An-ta mu-han-dis-un"</p>
            <p className="translation">You are an engineer (male).</p>
        </div>
        <div className="terms-card">
            <p className="arabic-text">أَنْتِ مَهَنْدِسَةٌ</p>
            <p className="intro-romanization">"An-ti mu-han-disa-tun"</p>
            <p className="translation">You are an engineer (female).</p>
        </div>
    </div>
</div>

    </div>
  );
}