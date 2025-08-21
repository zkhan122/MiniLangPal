import AudioSynthesizer  from "../../utils/AudioTTSSynthesizer";
import audio1 from "../../media/sounds/questions-1.mp3";
import audio2 from "../../media/sounds/questions-2.mp3";
import audio3 from "../../media/sounds/questions-3.mp3";
import audio4 from "../../media/sounds/questions-4.mp3";
import audio5 from "../../media/sounds/questions-5.mp3";
import audio6 from "../../media/sounds/questions-6.mp3";
import audio7 from "../../media/sounds/questions-7.mp3";
import audio8 from "../../media/sounds/questions-8.mp3";
import audio9 from "../../media/sounds/questions-9.mp3";
import audio10 from "../../media/sounds/questions-10.mp3";
import audio11 from "../../media/sounds/questions-11.mp3";
import audio12 from "../../media/sounds/questions-12.mp3";
import audio13 from "../../media/sounds/questions-13.mp3";
import audio14 from "../../media/sounds/questions-14.mp3";
import audio15 from "../../media/sounds/questions-15.mp3";
import audio16 from "../../media/sounds/questions-16.mp3";

export default function AskingQuestions() {

    return (
        <div className="container">
            <div className="section">
                <h2 className="greetings-title">Section: Asking Common Questions</h2>
                <br></br>
                <p>
                Here are some of the most common questions you can ask in Fus'ha Arabic, along with useful terms to help you answer them.
                </p>

                {/* "Where is...?" */}
                <h2 className="intros-title">Asking about location</h2>
                <div className="card-container">
                    <div className="greeting-card">
                        <p className="arabic-text">أَيْنَ ...؟</p>
                        <p className="intro-romanization">"Ayna...?"</p>
                        <p className="translation">Where is...?</p>
                        <div>
                            <AudioSynthesizer audioFile={audio1}/>
                        </div>
                    </div>
                </div>
                
                <h2 className="intros-title">Terms for places to follow أَيْنَ "Ayna" (Where) </h2>
                <p>
                You can use any of these words to ask for a location. The word's ending vowel depends on its place in the sentence.
                </p>
                <div className="card-container">
                    <div className="terms-card">
                        <p className="arabic-text">مُسْتَشْفَى</p>
                        <p className="intro-romanization">"Mus-tash-fa"</p>
                        <p className="translation">Hospital</p>
                        <div>
                            <AudioSynthesizer audioFile={audio2}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">مَطْعَمٌ</p>
                        <p className="intro-romanization">"Mat-'am-un"</p>
                        <p className="translation">Restaurant</p>
                        <div>
                            <AudioSynthesizer audioFile={audio3}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">سُوقٌ</p>
                        <p className="intro-romanization">"Suuq-un"</p>
                        <p className="translation">Market</p>
                        <div>
                            <AudioSynthesizer audioFile={audio4}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">فُنْدُقٌ</p>
                        <p className="intro-romanization">"Fun-duq-un"</p>
                        <p className="translation">Hotel</p>
                        <div>
                            <AudioSynthesizer audioFile={audio5}/>
                        </div>
                    </div>
                </div>

                {/* "What is this?" */}
                <h2 className="intros-title">Asking about objects</h2>
                <div className="card-container">
                    <div className="intro-card">
                        <p className="arabic-text">مَا هَذَا؟</p>
                        <p className="intro-romanization">"Maa hazaa?"</p>
                        <p className="translation">What is this? (Masculine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio6}/>
                        </div>
                    </div>
                    <div className="intro-card">
                        <p className="arabic-text">مَا هَذِهِ؟</p>
                        <p className="intro-romanization">"Maa hazihi?"</p>
                        <p className="translation">What is this? (Feminine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio7}/>
                        </div>
                    </div>
                </div>

                <h2 className="intros-title">Terms for objects to follow هَذَا or هَذِهِ</h2>
                <p>
                The question and answer must agree in gender.
                </p>
                <div className="card-container">
                    <div className="terms-card">
                        <p className="arabic-text">كِتَابٌ</p>
                        <p className="intro-romanization">"Ki-taab-un"</p>
                        <p className="translation">Book (Masculine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio8}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">قَلَمٌ</p>
                        <p className="intro-romanization">"Qa-lam-un"</p>
                        <p className="translation">Pen (Masculine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio9}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">سَيَّارَةٌ</p>
                        <p className="intro-romanization">"Say-yaa-ra-tun"</p>
                        <p className="translation">Car (Feminine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio10}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">نَظَّارَةٌ</p>
                        <p className="intro-romanization">"Naz-zaa-ra-tun"</p>
                        <p className="translation">Glasses (Feminine)</p>
                        <div>
                            <AudioSynthesizer audioFile={audio11}/>
                        </div>
                    </div>
                </div>
                
                {/* "What is the time?" */}
                <h2 className="intros-title">Asking about the time</h2>
                <div className="card-container">
                    <div className="green-card">
                        <p className="arabic-text">كَمِ السَّاعَةُ؟</p>
                        <p className="intro-romanization">"Kami-sa'a-tu?"</p>
                        <p className="translation">What is the time?</p>
                        <div>
                            <AudioSynthesizer audioFile={audio12}/>
                        </div>
                    </div>
                </div>
                
                <h2 className="intros-title">Telling the time</h2>
                <div className="card-container">
                    <div className="terms-card">
                        <p className="arabic-text">السَّاعَةُ الْعَاشِرَةُ</p>
                        <p className="intro-romanization">"As-sa'a-tu al-'aa-shi-ra-tu"</p>
                        <p className="translation">It is ten o'clock.</p>
                        <div>
                            <AudioSynthesizer audioFile={audio13}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">وَالرُّبْعُ</p>
                        <p className="intro-romanization">"War-rub'u"</p>
                        <p className="translation">and a quarter past</p>
                        <div>
                            <AudioSynthesizer audioFile={audio14}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">وَالنِّصْفُ</p>
                        <p className="intro-romanization">"Wan-nisfu"</p>
                        <p className="translation">and a half past</p>
                        <div>
                            <AudioSynthesizer audioFile={audio15}/>
                        </div>
                    </div>
                    <div className="terms-card">
                        <p className="arabic-text">إِلَّا الرُّبْعَ</p>
                        <p className="intro-romanization">"ila-al-rub'a"</p>
                        <p className="translation">minus a quarter to</p>
                        <div>
                            <AudioSynthesizer audioFile={audio16}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}