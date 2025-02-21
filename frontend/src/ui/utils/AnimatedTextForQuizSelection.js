import React, { useEffect, useRef } from 'react';
import '../css/quizSelection.css';

const AnimatedText = ({ text }) => {
  const lettersRef = useRef(null);
  const textWrapperRef = useRef(null);

  useEffect(() => {
    if (lettersRef.current) {
      lettersRef.current.innerHTML = lettersRef.current.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }
  }, [text]);

  return (
    <h1 className="ml7">
      <span
        ref={textWrapperRef}
        className="text-wrapper"
      >
        <span ref={lettersRef} className="letters">
          {text}
        </span>
      </span>
    </h1>
  );
};

export default AnimatedText;