import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/quiz-styling.css";
import useSound from "use-sound";
import audio1 from "../media/sounds/family-1.mp3";
import audio4 from "../media/sounds/family-4.mp3";
import audio6 from "../media/sounds/family-6.mp3";
import audio9 from "../media/sounds/family-9.mp3";
import audio11 from "../media/sounds/family-11.mp3";

export default function QuizFamily() {
  const questions = [
    {
      questionText: "What does 'A-bee' mean?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "My mother", isCorrect: false },
        { answerText: "My father", isCorrect: true },
        { answerText: "My brother", isCorrect: false },
        { answerText: "My sister", isCorrect: false },
      ],
    },
    {
      questionText: "Which word means 'My sister'?",
      soundFile: audio4,
      answerOptions: [
        { answerText: "Akh-ee", isCorrect: false },
        { answerText: "Um-mee", isCorrect: false },
        { answerText: "Ukh-tee", isCorrect: true },
        { answerText: "A-bee", isCorrect: false },
      ],
    },
    {
      questionText: "To say 'My brother is tall,' you would use:",
      soundFile: audio9,
      answerOptions: [
        { answerText: "Akh-ee ta-weel-un", isCorrect: true },
        { answerText: "Ukh-tee ta-wee-la-tun", isCorrect: false },
        { answerText: "A-bee qa-seer-un", isCorrect: false },
        { answerText: "Um-mee qa-see-ra-tun", isCorrect: false },
      ],
    },
    {
      questionText: "The word for 'tall' for a male is 'Ta-weel-un.' What is the word for 'tall' for a female?",
      soundFile: audio6,
      answerOptions: [
        { answerText: "Qa-seer-un", isCorrect: false },
        { answerText: "Ta-wee-la-tun", isCorrect: true },
        { answerText: "Qa-see-ra-tun", isCorrect: false },
        { answerText: "Akh-ee", isCorrect: false },
      ],
    },
    {
      questionText: "How would you say 'My mother is short'?",
      soundFile: audio11,
      answerOptions: [
        { answerText: "A-bee qa-seer-un", isCorrect: false },
        { answerText: "Ukh-tee ta-wee-la-tun", isCorrect: false },
        { answerText: "Um-mee qa-see-ra-tun", isCorrect: true },
        { answerText: "Akh-ee ta-weel-un", isCorrect: false },
      ],
    },
    {
      questionText: "The possessive pronoun that means 'my' is attached to the end of the noun. What does it look like in romanization?",
      soundFile: audio1,
      answerOptions: [
        { answerText: "-un", isCorrect: false },
        { answerText: "-ee", isCorrect: true },
        { answerText: "-a", isCorrect: false },
        { answerText: "-ta", isCorrect: false },
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