import React from "react";
import "../../css/text-styling.css";
import "../../css/content-card-styling.css";
import AudioSynthesizer  from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/this-1.mp3";
import audio2 from "../../media/sounds/this-2.mp3";
import audio3 from "../../media/sounds/this-3.mp3";
import audio4 from "../../media/sounds/this-4.mp3";
import audio5 from "../../media/sounds/this-5.mp3";
import audio6 from "../../media/sounds/this-6.mp3";
import audio7 from "../../media/sounds/this-7.mp3";
import audio8 from "../../media/sounds/this-8.mp3";
import audio9 from "../../media/sounds/this-9.mp3";
import audio10 from "../../media/sounds/this-10.mp3";
import audio11 from "../../media/sounds/this-11.mp3";
import audio12 from "../../media/sounds/this-12.mp3";
import audio13 from "../../media/sounds/this-13.mp3";
import audio14 from "../../media/sounds/this-14.mp3";
import audio15 from "../../media/sounds/this-15.mp3";
import audioumee from "../../media/sounds/this-umee.mp3"
export default function ThisThat() {
  return (
    <div className="container">
      <h1 className="title">Fus'ha Arabic: This & That</h1>

      {/* Demonstratives */}
      <div className="section">
        <h2 className="greetings-title">Section: Using "This is / That is"</h2>
        <div className="card-container">
          <div>
            <div className="greeting-card">
              <p className="arabic-text">...هَذَا</p>
              <p className="intro-romanization">"Hazaa..."</p>
              <p className="translation">This is (Masculine)</p>
              <div>
                  <AudioSynthesizer audioFile={audio1}/>
              </div>
            </div>
            <div className="greeting-card">
              <p className="arabic-text">...هَذِهِ</p>
              <p className="intro-romanization">"Ha-zee-hee..."</p>
              <p className="translation">This is (Feminine)</p>
              <div>
                  <AudioSynthesizer audioFile={audio2}/>
              </div>
            </div>
          </div>
        </div>
        <h4>Tip:</h4>
        <p>
          We use <b>هَذَا</b> (hazaa) when the object or person is <b>masculine</b>. This is usually when the word <b>DOES NOT</b> end with a "taa marbuta" <b>(ة)</b>.
        </p>
        <p>
          We use <b>هَذِهِ</b> (hazee-hee) when the object or person is <b>feminine</b>. This is usually when the word <b>DOES</b> end with a "taa marbuta" <b>(ة)</b>.
        </p>
      </div>

      {/* Referencing Objects */}
      <h2 className="intros-title">Including Objects</h2>
      <p>
        Here are some common objects and how to refer to them using <b>هَذَا</b>
        (this, masc.) and <b>هَذِهِ</b> (this, fem.).
      </p>

      <div className="card-container">
        <div className="terms-card">
          <p className="arabic-text">هَذَا كِتَابٌ</p>
          <p className="intro-romanization">"Hazaa ki-taab-un"</p>
          <p className="translation">This is a book.</p>
          <div>
              <AudioSynthesizer audioFile={audio3}/>
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">هَذَا قَلَمٌ</p>
          <p className="intro-romanization">"Hazaa qa-la-mun"</p>
          <p className="translation">This is a pen.</p>
          <div>
              <AudioSynthesizer audioFile={audio4}/>
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">هَذَا مَكْتَبٌ</p>
          <p className="intro-romanization">"Hazaa mak-ta-bun"</p>
          <p className="translation">This is a desk/office.</p>
          <div>
              <AudioSynthesizer audioFile={audio5}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="terms-card">
          <p className="arabic-text">هَذِهِ سَيَّارَةٌ</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> say-yaa-ra-<b><u>tun</u></b>"</p>
          <p className="translation">This is a car.</p>
          <div>
              <AudioSynthesizer audioFile={audio6}/>
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">هَذِهِ مَدْرَسَةٌ</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> mad-ra-sa-<b><u>tun</u></b>"</p>
          <p className="translation">This is a school.</p>
          <div>
              <AudioSynthesizer audioFile={audio7}/>
          </div>
        </div>

        <div className="terms-card">
          <p className="arabic-text">هَذِهِ نَظَّارَةٌ</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> naz-zaa-ra-<b><u>tun</u></b>"</p>
          <p className="translation">This is a pair of glasses.</p>
          <div>
              <AudioSynthesizer audioFile={audio8}/>
          </div>
        </div>
      </div>

 {/* Referencing People */}
      <h2 className="intros-title">Using "This" to Introduce People</h2>
      <p>
        You can also use **هَذَا** and **هَذِهِ** to introduce people. To say "my," you add the letter **ي** (yaa) to the end of the noun.
      </p>

      <div className="card-container">
        <div className="intro-card">
          <p className="arabic-text">هَذَا أَبِي</p>
          <p className="intro-romanization">"Hazaa a-bee"</p>
          <p className="translation">This is my father.</p>
          <div>
              <AudioSynthesizer audioFile={audio9}/>
          </div>
        </div>
        <div className="intro-card">
          <p className="arabic-text">هَذِهِ أُمِّي</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> um-mee"</p>
          <p className="translation">This is my mother.</p>
          <div>
              <AudioSynthesizer audioFile={audioumee}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="intro-card">
          <p className="arabic-text">هَذَا أَخِي</p>
          <p className="intro-romanization">"Hazaa akh-ee"</p>
          <p className="translation">This is my brother.</p>
          <div>
              <AudioSynthesizer audioFile={audio10}/>
          </div>
        </div>
        <div className="intro-card">
          <p className="arabic-text">هَذِهِ أُخْتِي</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> ukh-<b><u>tee</u></b>"</p>
          <p className="translation">This is my sister.</p>
          <div>
              <AudioSynthesizer audioFile={audio11}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="intro-card">
          <p className="arabic-text">هَذَا صَدِيقِي</p>
          <p className="intro-romanization">"Hazaa sa-deeq-ee"</p>
          <p className="translation">This is my friend (male).</p>
          <div>
              <AudioSynthesizer audioFile={audio12}/>
          </div>
        </div>
        <div className="intro-card">
          <p className="arabic-text">هَذِهِ صَدِيقَتِي</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> sa-deeq-a-<b><u>tee</u></b>"</p>
          <p className="translation">This is my friend (female).</p>
          <div>
              <AudioSynthesizer audioFile={audio13}/>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="intro-card">
          <p className="arabic-text">هَذَا أُسْتَاذِي</p>
          <p className="intro-romanization">"Hazaa us-taath-ee"</p>
          <p className="translation">This is my professor (male).</p>
          <div>
              <AudioSynthesizer audioFile={audio14}/>
          </div>
        </div>
        <div className="intro-card">
          <p className="arabic-text">هَذِهِ أُسْتَاذَتِي</p>
          <p className="intro-romanization">"<b><u>Ha-zee-hee</u></b> us-taath-a-<b><u>tee</u></b>"</p>
          <p className="translation">This is my professor (female).</p>
          <div>
              <AudioSynthesizer audioFile={audio15}/>
          </div>
        </div>
      </div>
    </div>
  );
}