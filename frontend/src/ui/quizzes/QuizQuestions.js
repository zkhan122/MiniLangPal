import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/questions-1.mp3";
import audio2 from "../media/sounds/questions-2.mp3";
import audio5 from "../media/sounds/questions-5.mp3";
import audio6 from "../media/sounds/questions-6.mp3";
import audio10 from "../media/sounds/questions-10.mp3";
import audio12 from "../media/sounds/questions-12.mp3";
import audio14 from "../media/sounds/questions-14.mp3";

export default function QuizQuestions() {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user || !user.role) {
        window.location.replace("/login");
      }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "What does 'Ayna' mean?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "What is...?", isCorrect: false },
        { answerText: "Where is...?", isCorrect: true },
        { answerText: "How are you?", isCorrect: false },
      ],
    },
    {
      questionText: "Which word means 'hospital'?",
      soundFile: audio2,
      answerOptions: [
        { answerText: "Mat-'am-un", isCorrect: false },
        { answerText: "Mus-tash-fa", isCorrect: true },
        { answerText: "Fun-duq-un", isCorrect: false },
      ],
    },
    {
      questionText: "How do you ask 'What is this?' for a masculine object?",
      soundFile: audio6,
      answerOptions: [
        { answerText: "Maa hazihi?", isCorrect: false },
        { answerText: "Kami-sa'a-tu?", isCorrect: false },
        { answerText: "Maa hazaa?", isCorrect: true },
      ],
    },
    {
      questionText: "Which word is feminine?",
      soundFile: audio10,
      answerOptions: [
        { answerText: "Ki-taab-un", isCorrect: false },
        { answerText: "Qa-lam-un", isCorrect: false },
        { answerText: "Say-yaa-ra-tun", isCorrect: true },
      ],
    },
    {
      questionText: "What does 'Kami-sa'a-tu?' mean?",
      soundFile: audio12,
      answerOptions: [
        { answerText: "Where is the market?", isCorrect: false },
        { answerText: "What is the time?", isCorrect: true },
        { answerText: "What is this?", isCorrect: false },
      ],
    },
    {
      questionText: "Which term means 'and a quarter past'?",
      soundFile: audio14,
      answerOptions: [
        { answerText: "Wan-nisfu", isCorrect: false },
        { answerText: "Ila-al-rub'a", isCorrect: false },
        { answerText: "War-rub'u", isCorrect: true },
      ],
    },
    {
      questionText: "What does 'Fun-duq-un' mean?",
      soundFile: audio5,
      answerOptions: [
        { answerText: "Hotel", isCorrect: true },
        { answerText: "Restaurant", isCorrect: false },
        { answerText: "Market", isCorrect: false },
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