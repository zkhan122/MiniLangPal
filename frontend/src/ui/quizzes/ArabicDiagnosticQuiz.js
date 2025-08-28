import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedTextForQuizSelection from "../utils/AnimatedTextForQuizSelection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import arabicZaal from "../media/sounds/thaal.mp3";
import { useUser } from "../context/UserContext"; // Updated context
import { useLanguage } from "../context/LanguageContext";


export default function ArabicDiagnosticQuiz() {

    const [users, setUsers] = useState([])
;
    const { user } = useUser();

    const { language } = useLanguage();

    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.role) {
          window.location.replace("/login");
        }
    }, [user, navigate]);

    
    const sendScoreToDatabase = async(finalScore) => {
      try {
        const objectSent = await axios.post("http://localhost:8080/quiz-score", {
          username: user.username,
          quizScore: finalScore,
          role: user.role,
        }, {
          withCredentials: true,
        });
        console.log("Quiz score stored successfully", objectSent.data);
      } catch (error) {
        console.error("Failed to post quiz score", error);
      }
    }

    const [hasDoneQuiz, setHasDoneQuiz] = useState(false);
    const [quizChecked, setQuizChecked] = useState(false); // so to avoid rendering the quiz page before the check happens for if they have done it alreadys

    const checkIfQuizDone = async()=> {
      try {
        const {data} = await axios.get(
          `http://localhost:8080/check-diagnostic-quiz-score/${user.username}/${language}`,
          { withCredentials: true} // needed this to avoid HTTP 403
        );
        
        if (data && data.quiz_score !==undefined) {
          setHasDoneQuiz(true);
          console.log("Existing quiz score:", data);
        } else {
          setHasDoneQuiz(false);
        }
        
      } catch (error) {
        if (error.response?.status === 404) {
          console.log("No quiz record found for this user");
          setHasDoneQuiz(false);
        } else {
          console.error("Error checking quiz score:", error);
        }
      } finally {
        setQuizChecked(true);
      }
    }

    useEffect(() => {
      if (user?.username && language) {
        console.log("Checking if the quiz has been done..");
        checkIfQuizDone();
      } else {
        console.log("Missing user or language");
        setQuizChecked(true);

      }
    }, [user, language]);




    const questions = [
        {
            questionText: "What sound is this?",
            soundFile: arabicZaal, 
            answerOptions: [
                { answerText: "daal (د)", isCorrect: false },
                { answerText: "aalif (ا)", isCorrect: false },
                { answerText: "noon (ن)", isCorrect: false },
                { answerText: "zaal (ذ)", isCorrect: true },
            ],
        },
        {
            questionText: "Beautiful is to جميل as ugly is to?",
            soundFile: null,
            answerOptions: [
                { answerText: 'سعيد (sa`eed)', isCorrect: false },
                { answerText: 'قبيح (qabih)', isCorrect: true },
                { answerText: 'طويل (taweel)', isCorrect: false },
                { answerText: 'مجنون (majnoon)', isCorrect: false },
            ],
        },
        {
            questionText: "What does 'Kitab' (كتاب) mean?",
            soundFile: null,
            answerOptions: [
                { answerText: 'House', isCorrect: false },
                { answerText: 'Book', isCorrect: true },
                { answerText: 'Car', isCorrect: false },
                { answerText: 'Door', isCorrect: false },
            ],
        },
        {
            questionText: "How do you say 'Good morning' in Fush'a?",
            soundFile: null,
            answerOptions: [
                { answerText: 'Marhaban (مرحبا)', isCorrect: false },
                { answerText: 'Masaa’ al-khayr (مساء الخير)', isCorrect: false },
                { answerText: 'Sabah al-khayr (صباح الخير)', isCorrect: true },
                { answerText: 'Ahlan (أهلا)', isCorrect: false },
            ],
        },
        {
            questionText: "What is the plural of 'bayt' (بيت)?",
            soundFile: null,
            answerOptions: [
                { answerText: 'Baytaat (بيتات)', isCorrect: false },
                { answerText: 'Abaayt (أبيت)', isCorrect: false },
                { answerText: 'Buyoot (بيوت)', isCorrect: true },
                { answerText: 'Buyyutan (بيوتا)', isCorrect: false },
            ],
        },
        {
            questionText: "What does the phrase 'Kaifa haluka?' (كيف حالك؟) mean?",
            soundFile: null,
            answerOptions: [
                { answerText: 'What is your name?', isCorrect: false },
                { answerText: 'How are you?', isCorrect: true },
                { answerText: 'Where are you from?', isCorrect: false },
                { answerText: 'What is this?', isCorrect: false },
            ],
        },
        {
            questionText: "What is the Arabic word for 'Thank you'?",
            soundFile: null,
            answerOptions: [
                { answerText: 'Afwan (عفوا)', isCorrect: false },
                { answerText: 'Shukran (شكراً)', isCorrect: true },
                { answerText: 'Min fadlik (من فضلك)', isCorrect: false },
                { answerText: 'Na`am (نعم)', isCorrect: false },
            ],
        },
        {
            questionText: "What does the pronoun 'Huwa' (هو) mean?",
            soundFile: null,
            answerOptions: [
                { answerText: 'I', isCorrect: false },
                { answerText: 'You', isCorrect: false },
                { answerText: 'He', isCorrect: true },
                { answerText: 'She', isCorrect: false },
            ],
        },
        {
            questionText: "Which word means 'school'?",
            soundFile: null,
            answerOptions: [
                { answerText: 'Jaami`a (جامعة)', isCorrect: false },
                { answerText: 'Mustashfa (مستشفى)', isCorrect: false },
                { answerText: 'Madrasa (مدرسة)', isCorrect: true },
                { answerText: 'Bayt (بيت)', isCorrect: false },
            ],
        },
        {
            questionText: "Which word means 'cat'?",
            soundFile: null,
            answerOptions: [
                { answerText: 'Kalib (كلب)', isCorrect: false },
                { answerText: 'Jamal (جمل)', isCorrect: false },
                { answerText: 'Qit (قط)', isCorrect: true },
                { answerText: 'Faras (فرس)', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    // Use sound hook for the current question's sound file
    const [play, { stop, isPlaying }] = useSound(
        questions[currentQuestion].soundFile || '', 
        { 
            volume: 3.0,
            // we will only play if a sound file exists
            disabled: !questions[currentQuestion].soundFile
        }
    );

    const handleAnswerOptionClick = (isCorrect) => {
        // Stop any playing sound when answering
        stop();

        let newScore = score;
        if (isCorrect) {
          newScore = score + 1;
          setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            sendScoreToDatabase(newScore)
        }
    };

    return (
        <div className='app'>
          {!quizChecked ? (
            <div>Loading...</div>
          ) : hasDoneQuiz ? (
            <div className="already-done-message">
              <h2>You have already done this quiz. Go to My Learning</h2>
            </div>
          ) : user ? (
            showScore ? (
              <div className='score-section'>
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className='question-section'>
                  <div className='question-count'>
                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                  </div>
                  <div className='question-text'>{questions[currentQuestion].questionText}</div>
      
                  {/* Sound Play Button - Only show if sound file exists */}
                  {questions[currentQuestion].soundFile && (
                    <button 
                      className="btn btn-primary sound-play-btn"
                      onClick={play}
                      disabled={isPlaying}
                    >
                      {isPlaying ? 'Playing...' : 'Play Sound'}
                    </button>
                  )}
                </div>
                <div className='answer-section'>
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button 
                      key={index}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )
          ) : null}
          <div>
        <button className="btn btn-primary" id="quiz-go-back-button" onClick={() => navigate("/learning")}>
          Go back
        </button>

          </div>
        </div>
      );
    }