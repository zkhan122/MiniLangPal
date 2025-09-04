import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/background-1.mp3";
import audio2 from "../media/sounds/background-2.mp3";
import audio4 from "../media/sounds/background-4.mp3";
import audio11 from "../media/sounds/background-11.mp3";
import audio13 from "../media/sounds/background-13.mp3";
import audio16 from "../media/sounds/background-16.mp3";
import audio21 from "../media/sounds/background-21.mp3";

export default function QuizBackground() {

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
      if (!user || !user.role) {
        window.location.replace("/login");
      }
  }, [user, navigate]);

  const questions = [
    {
      questionText: "What is the English translation for 'Min ayna ant?'",
      soundFile: audio1,
      answerOptions: [
        { answerText: "What is your name?", isCorrect: false },
        { answerText: "Where are you from?", isCorrect: true },
        { answerText: "How are you?", isCorrect: false },
        { answerText: "What is your nationality?", isCorrect: false },
      ],
    },
    {
      questionText: "Which phrase means 'I am from...'?",
      soundFile: audio2,
      answerOptions: [
        { answerText: "Maa jin-seeya tooka?", isCorrect: false },
        { answerText: "Ana min...", isCorrect: true },
        { answerText: "Ismi...", isCorrect: false },
        { answerText: "Bima ta3malu?", isCorrect: false },
      ],
    },
    {
      questionText: "When asking a female 'What is your nationality?', you would say:",
      soundFile: audio4,
      answerOptions: [
        { answerText: "Maa jin-seeya tooka?", isCorrect: false },
        { answerText: "Maa jin-seeya tookee?", isCorrect: true },
        { answerText: "Min ayna ant?", isCorrect: false },
        { answerText: "Ana min...", isCorrect: false },
      ],
    },
    {
      questionText: "A female would say she is British by using which word?",
      soundFile: audio11,
      answerOptions: [
        { answerText: "Bri-tan-ee", isCorrect: false },
        { answerText: "Baa-kis-tani", isCorrect: false },
        { answerText: "Bri-tan-ee-ya", isCorrect: true },
        { answerText: "Arab-ee-ya", isCorrect: false },
      ],
    },
    {
      questionText: "What is the English translation for 'A3maloo ka...'?",
      soundFile: audio13,
      answerOptions: [
        { answerText: "I am a...", isCorrect: false },
        { answerText: "I work as...", isCorrect: true },
        { answerText: "Where are you from?", isCorrect: false },
        { answerText: "What do you work as?", isCorrect: false },
      ],
    },
    {
      questionText: "How would a male say he is a 'doctor'?",
      soundFile: audio16,
      answerOptions: [
        { answerText: "Tua-beebaa", isCorrect: false },
        { answerText: "Mu-handisaa", isCorrect: false },
        { answerText: "Moo-a3lim", isCorrect: false },
        { answerText: "Tua-beeb", isCorrect: true },
      ],
    },
    {
      questionText: "What does 'Tau-libaa' mean?",
      soundFile: audio21,
      answerOptions: [
        { answerText: "Female student", isCorrect: true },
        { answerText: "Male student", isCorrect: false },
        { answerText: "Female teacher", isCorrect: false },
        { answerText: "Male worker", isCorrect: false },
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
        </div>
  );
}