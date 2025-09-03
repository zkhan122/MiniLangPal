import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import AudioSynthesizer from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/family-1.mp3";
import audio2 from "../../media/sounds/family-2.mp3";
import audio3 from "../../media/sounds/family-3.mp3";
import audio4 from "../../media/sounds/family-4.mp3";
import audio5 from "../../media/sounds/family-5.mp3";
import audio6 from "../../media/sounds/family-6.mp3";
import audio7 from "../../media/sounds/family-7.mp3";
import audio8 from "../../media/sounds/family-8.mp3";
import audio9 from "../../media/sounds/family-9.mp3";
import audio10 from "../../media/sounds/family-10.mp3";
import audio11 from "../../media/sounds/family-11.mp3";
import audiotallsister from "../../media/sounds/familytallsister.mp3";

export default function DescribingFamily() {
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
      <div className="section">
        <h2 className="title">Section: Describing Your Family</h2>
        <p>
          To talk about your family, you can use the possessive pronoun{" "}
          <b>
            <u>ـي</u>
          </b>{" "}
          (-ee) at the end of a noun, which means "my." To describe a family
          member, you must use an adjective that matches their gender.
        </p>
        <p>
          Males and females can you any of these interchangeably but must be
          careful when referring to male (use masculine) or female (use
          feminine)
        </p>
        <br></br>
        <h2 className="intros-title">Basic Family Members</h2>
        <div className="card-container">
          <div className="green-card">
            <p className="arabic-text">أَبِي</p>
            <p className="intro-romanization">"A-bee"</p>
            <p className="translation">My father</p>
            <div>
              <AudioSynthesizer audioFile={audio1} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">أُمِّي</p>
            <p className="intro-romanization">"Um-mee"</p>
            <p className="translation">My mother</p>
            <div>
              <AudioSynthesizer audioFile={audio2} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">أَخِي</p>
            <p className="intro-romanization">"Akh-ee"</p>
            <p className="translation">My brother</p>
            <div>
              <AudioSynthesizer audioFile={audio3} />
            </div>
          </div>
          <div className="green-card">
            <p className="arabic-text">أُخْتِي</p>
            <p className="intro-romanization">"Ukh-tee"</p>
            <p className="translation">My sister</p>
            <div>
              <AudioSynthesizer audioFile={audio4} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">Common Adjectives for Description</h2>
        <div className="card-container">
          <div className="intro-card">
            <p className="arabic-text">طَوِيلٌ</p>
            <p className="intro-romanization">"Ta-weel-un"</p>
            <p className="translation">Tall (Masculine)</p>
            <div>
              <AudioSynthesizer audioFile={audio5} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">طَوِيلَةٌ</p>
            <p className="intro-romanization">"Ta-wee-la-tun"</p>
            <p className="translation">Tall (Feminine)</p>
            <div>
              <AudioSynthesizer audioFile={audio6} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">قَصِيرٌ</p>
            <p className="intro-romanization">"Qa-seer-un"</p>
            <p className="translation">Short (Masculine)</p>
            <div>
              <AudioSynthesizer audioFile={audio7} />
            </div>
          </div>
          <div className="intro-card">
            <p className="arabic-text">قَصِيرَةٌ</p>
            <p className="intro-romanization">"Qa-see-ra-tun"</p>
            <p className="translation">Short (Feminine)</p>
            <div>
              <AudioSynthesizer audioFile={audio8} />
            </div>
          </div>
        </div>

        <h2 className="intros-title">
          Putting it Together: Describing Family Members
        </h2>
        <div className="card-container">
          <div className="terms-card">
            <p className="arabic-text">أَخِي طَوِيلٌ</p>
            <p className="intro-romanization">"Akh-ee ta-weel-un"</p>
            <p className="translation">My brother is tall.</p>
            <div>
              <AudioSynthesizer audioFile={audio9} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">أُخْتِي طَوِيلَةٌ</p>
            <p className="intro-romanization">"Ukh-tee ta-wee-la-tun"</p>
            <p className="translation">My sister is tall.</p>
            <div>
              <AudioSynthesizer audioFile={audiotallsister} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">أَبِي قَصِيرٌ</p>
            <p className="intro-romanization">"A-bee qa-seer-un"</p>
            <p className="translation">My father is short.</p>
            <div>
              <AudioSynthesizer audioFile={audio10} />
            </div>
          </div>
          <div className="terms-card">
            <p className="arabic-text">أُمِّي قَصِيرَةٌ</p>
            <p className="intro-romanization">"Um-mee qa-see-ra-tun"</p>
            <p className="translation">My mother is short.</p>
            <div>
              <AudioSynthesizer audioFile={audio11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
