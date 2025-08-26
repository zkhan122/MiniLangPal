import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/verbs-1.mp3";
import audio2 from "../media/sounds/verbs-2.mp3";
import audio6 from "../media/sounds/verbs-6.mp3";
import audio7 from "../media/sounds/verbs-7.mp3";
import audio10 from "../media/sounds/verbs-10.mp3";
import audio14 from "../media/sounds/verbs-14.mp3";
import audio18 from "../media/sounds/verbs-18.mp3";

export default function QuizVerbs() {

  const { user } = useUser();
  const navigate = useNavigate()

  useEffect(() => {
    if (!user || !user.role) {
      window.location.replace("/login");
    }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "Verbs for 'I' often start with which sound?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "ya", isCorrect: false },
        { answerText: "ta", isCorrect: false },
        { answerText: "aa", isCorrect: true },
      ],
    },
    {
      questionText: "What does 'Hu-wa ya-malu' mean?",
      soundFile: audio2,
      answerOptions: [
        { answerText: "She works.", isCorrect: false },
        { answerText: "I work.", isCorrect: false },
        { answerText: "He works.", isCorrect: true },
      ],
    },
    {
      questionText: "Which of these means 'She lives'?",
      soundFile: audio6,
      answerOptions: [
        { answerText: "Hu-wa yas-kunoo", isCorrect: false },
        { answerText: "Hi-ya ta-skun-oo", isCorrect: true },
        { answerText: "Ana as-kunoo", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'Ana aakuloo' mean?",
      soundFile: audio7,
      answerOptions: [
        { answerText: "He eats.", isCorrect: false },
        { answerText: "She eats.", isCorrect: false },
        { answerText: "I eat.", isCorrect: true },
      ],
    },
    {
      questionText: "Which phrase means 'He studies'?",
      soundFile: audio14,
      answerOptions: [
        { answerText: "Hi-ya tad-rus-oo", isCorrect: false },
        { answerText: "Hu-wa yad-rus-oo", isCorrect: true },
        { answerText: "Ana ad-rus-oo", isCorrect: false },
      ],
    },
    {
      questionText: "What is the English translation for 'Hi-ya tak-tu-boo'?",
      soundFile: audio18,
      answerOptions: [
        { answerText: "He writes.", isCorrect: false },
        { answerText: "I write.", isCorrect: false },
        { answerText: "She writes.", isCorrect: true },
      ],
    },
    {
      questionText: "Which of these phrases means 'I drink'?",
      soundFile: audio10,
      answerOptions: [
        { answerText: "Hu-wa yash-raboo", isCorrect: false },
        { answerText: "Hi-ya tash-raboo", isCorrect: false },
        { answerText: "Ana ash-raboo", isCorrect: true },
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