import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/this-1.mp3";
import audio3 from "../media/sounds/this-3.mp3";
import audio4 from "../media/sounds/this-4.mp3";
import audio6 from "../media/sounds/this-6.mp3";
import audio7 from "../media/sounds/this-7.mp3";
import audio10 from "../media/sounds/this-10.mp3";
import audio14 from "../media/sounds/this-14.mp3";

export default function QuizThisThat() {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user || !user.role) {
        window.location.replace("/login");
      }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "Which phrase is used to say 'This is' for a masculine noun?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "Hazaa", isCorrect: true },
        { answerText: "Ha-zee-hee", isCorrect: false },
        { answerText: "Ma is-muk?", isCorrect: false },
        { answerText: "A3maloo ka...", isCorrect: false },
      ],
    },
    {
      questionText: "Which word would you use to say 'This is' for 'say-yaa-ra-tun' (car)?",
      soundFile: audio6,
      answerOptions: [
        { answerText: "Hazaa", isCorrect: false },
        { answerText: "Ha-zee-hee", isCorrect: true },
        { answerText: "Min ayna ant?", isCorrect: false },
        { answerText: "Ismi...", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'Hazaa ki-taab-un' mean in English?",
      soundFile: audio3,
      answerOptions: [
        { answerText: "This is a book.", isCorrect: true },
        { answerText: "That is a pen.", isCorrect: false },
        { answerText: "This is a school.", isCorrect: false },
        { answerText: "This is a desk.", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these phrases means 'This is a professor (male)'?",
      soundFile: audio14,
      answerOptions: [
        { answerText: "Ha-zee-hee us-taath-a-tee", isCorrect: false },
        { answerText: "Hazaa us-taath-ee", isCorrect: true },
        { answerText: "Hazaa sa-deeq-ee", isCorrect: false },
        { answerText: "Ha-zee-hee ukh-tee", isCorrect: false },
      ],
    },
    {
      questionText: "The word 'mad-ra-sa-tun' (school) is feminine because it ends with a 'taa marbuta' (ة). Which 'This is' form should be used?",
      soundFile: audio7,
      answerOptions: [
        { answerText: "Hazaa", isCorrect: false },
        { answerText: "Ha-zee-hee", isCorrect: true },
        { answerText: "Ana...", isCorrect: false },
        { answerText: "Ismi...", isCorrect: false },
      ],
    },
    {
      questionText: "What is the English translation for 'Hazaa akh-ee'?",
      soundFile: audio10,
      answerOptions: [
        { answerText: "This is my friend (male).", isCorrect: false },
        { answerText: "This is my mother.", isCorrect: false },
        { answerText: "This is my brother.", isCorrect: true },
        { answerText: "This is my father.", isCorrect: false },
      ],
    },
    {
      questionText: "To say 'This is a pen,' you would use 'Hazaa'. What is the romanized word for 'pen'?",
      soundFile: audio4,
      answerOptions: [
        { answerText: "say-yaa-ra-tun", isCorrect: false },
        { answerText: "mak-ta-bun", isCorrect: false },
        { answerText: "qa-la-mun", isCorrect: true },
        { answerText: "ki-taab-un", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const [play, { stop, isPlaying }] = useSound(
    questions[currentQuestion].soundFile || "",
    {
      volume: 3.0,
      disabled: !questions[currentQuestion].soundFile,
    }
  );

  const handleAnswerOptionClick = (isCorrect) => {
    stop();

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <div className="mt-3">
            <button className="btn btn-primary" onClick={resetQuiz}>
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
            
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
      )}
    </div>
  );
}