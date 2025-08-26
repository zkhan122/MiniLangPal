import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/greetings-1.mp3";
import audio2 from "../media/sounds/greetings-2.mp3";
import audio4 from "../media/sounds/greetings-4.mp3";
import audio7 from "../media/sounds/greetings-7.mp3";
import audio8 from "../media/sounds/greetings-8.mp3";
import audio10 from "../media/sounds/greetings-10.mp3";
import audio11 from "../media/sounds/greetings-11.mp3";

export default function QuizGreetings() {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user || !user.role) {
        window.location.replace("/login");
      }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "What is the English translation for 'Assalamu Aleikum'?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "Hello", isCorrect: false },
        { answerText: "Peace be upon you", isCorrect: true },
        { answerText: "Good morning", isCorrect: false },
        { answerText: "How are you?", isCorrect: false },
      ],
    },
    {
      questionText: "Which phrase is the correct response to 'Assalamu Aleikum'?",
      soundFile: audio2,
      answerOptions: [
        { answerText: "Mar-haban", isCorrect: false },
        { answerText: "Waleikum-As-Salam", isCorrect: true },
        { answerText: "Sabah al-khayr", isCorrect: false },
        { answerText: "Kayfa-halooka?", isCorrect: false },
      ],
    },
    {
      questionText: "What does the phrase 'Sabah al-khayr' mean in English?",
      soundFile: audio4,
      answerOptions: [
        { answerText: "Good night", isCorrect: false },
        { answerText: "Good afternoon", isCorrect: false },
        { answerText: "Good morning", isCorrect: true },
        { answerText: "Goodbye", isCorrect: false },
      ],
    },
    {
      questionText: "How do you ask 'How are you?' to a male?",
      soundFile: audio7,
      answerOptions: [
        { answerText: "Kayfa-halookee?", isCorrect: false },
        { answerText: "Ma is-muk?", isCorrect: false },
        { answerText: "Kayfa-halooka?", isCorrect: true },
        { answerText: "Ana bi-khayr", isCorrect: false },
      ],
    },
    {
      questionText: "How do you say 'My name is...'?",
      soundFile: audio11,
      answerOptions: [
        { answerText: "Kayfa-halookee?", isCorrect: false },
        { answerText: "Ma is-muk?", isCorrect: false },
        { answerText: "Ismi...", isCorrect: true },
        { answerText: "Ana bi-khayr", isCorrect: false },
      ],
    },
    {
      questionText: "Which phrase means 'I am good, praise be to God'?",
      soundFile: audio8,
      answerOptions: [
        { answerText: "Ana bi-khayr Alhamdulilah", isCorrect: true },
        { answerText: "Taab moosa ik", isCorrect: false },
        { answerText: "Taabat layla took", isCorrect: false },
        { answerText: "Assalamu Aleikum", isCorrect: false },
      ],
    },
    {
      questionText: "What is the English translation for 'Ma is-muk?'",
      soundFile: audio10,
      answerOptions: [
        { answerText: "How are you?", isCorrect: false },
        { answerText: "What is your name?", isCorrect: true },
        { answerText: "My name is...", isCorrect: false },
        { answerText: "Peace be upon you", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  // Use sound hook for the current question's sound file
  const [play, { stop, isPlaying }] = useSound(
    questions[currentQuestion].soundFile || "",
    {
      volume: 3.0,
      disabled: !questions[currentQuestion].soundFile,
    }
  );

  const handleAnswerOptionClick = (isCorrect) => {
    // Stop any playing sound when answering
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
      )}
    </div>
  );
}