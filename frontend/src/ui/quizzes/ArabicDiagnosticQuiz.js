import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedTextForQuizSelection from "../utils/AnimatedTextForQuizSelection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import arabicZaal from "../media/sounds/thaal.mp3";
import { useUser } from "../context/UserContext"; // Updated context


export default function App() {

    const [users, setUsers] = useState([])
;
    const { user } = useUser();

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
            soundFile: null, // No sound for this question
            answerOptions: [
                { answerText: 'سعيد', isCorrect: false },
                { answerText: 'قبيح', isCorrect: true },
                { answerText: 'طويل', isCorrect: false },
                { answerText: 'مجنون', isCorrect: false },
            ],
        },
        {
            questionText: 'The iPhone was created by which company?',
            soundFile: null, // No sound for this question
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            soundFile: null, // No sound for this question
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
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
          {user ? (
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
        </div>
      );
    }