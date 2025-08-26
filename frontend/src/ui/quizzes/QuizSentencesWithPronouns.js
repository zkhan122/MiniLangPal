import { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/pronouns-1.mp3";
import audio2 from "../media/sounds/pronouns-2.mp3";
import audio3 from "../media/sounds/pronouns-3.mp3";
import audio4 from "../media/sounds/pronouns-4.mp3";
import audio5 from "../media/sounds/pronouns-5.mp3";
import audio6 from "../media/sounds/pronouns-6.mp3";

export default function QuizPronouns() {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user || !user.role) {
        window.location.replace("/login");
      }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "What does 'Ana mu'allim-un' mean?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "I am a male teacher.", isCorrect: true },
        { answerText: "I am a female teacher.", isCorrect: false },
        { answerText: "He is a student.", isCorrect: false },
        { answerText: "You are an engineer.", isCorrect: false },
      ],
    },
    {
      questionText: "Which pronoun is used to say 'He is'?",
      soundFile: audio3,
      answerOptions: [
        { answerText: "Ana", isCorrect: false },
        { answerText: "Hi-ya", isCorrect: false },
        { answerText: "Hu-wa", isCorrect: true },
        { answerText: "An-ta", isCorrect: false },
      ],
    },
    {
      questionText: "How would a female say 'I am a teacher'?",
      soundFile: audio2,
      answerOptions: [
        { answerText: "Ana mu'allim-un", isCorrect: false },
        { answerText: "Ana mu'alimaa", isCorrect: true },
        { answerText: "Hi-ya taa-lib-un", isCorrect: false },
        { answerText: "An-ti mu-han-dis-aa", isCorrect: false },
      ],
    },
    {
      questionText: "What does 'An-ta mu-han-dis-un' mean?",
      soundFile: audio5,
      answerOptions: [
        { answerText: "He is an engineer.", isCorrect: false },
        { answerText: "She is an engineer.", isCorrect: false },
        { answerText: "You are a male engineer.", isCorrect: true },
        { answerText: "You are a female engineer.", isCorrect: false },
      ],
    },
    {
      questionText: "Which phrase means 'She is a student'?",
      soundFile: audio4,
      answerOptions: [
        { answerText: "Hu-wa taa-lib-un", isCorrect: false },
        { answerText: "Hi-ya tau-lib-aa", isCorrect: true },
        { answerText: "Ana mu'allim-un", isCorrect: false },
        { answerText: "An-ti mu-han-dis-aa", isCorrect: false },
      ],
    },
    {
      questionText: "What is the English translation for 'An-ti mu-han-dis-aa'?",
      soundFile: audio6,
      answerOptions: [
        { answerText: "You are a male engineer.", isCorrect: false },
        { answerText: "You are a female engineer.", isCorrect: true },
        { answerText: "He is a student.", isCorrect: false },
        { answerText: "I am a teacher.", isCorrect: false },
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