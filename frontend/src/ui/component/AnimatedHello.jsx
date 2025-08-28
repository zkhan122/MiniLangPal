import React from "react";
import "../scss/text-floating.scss";

const helloWords = [
  "Hi",
  "أهلاً",
  "你好",
  "ཨ་རོགས",
  "Сәлам",
  "مرحبا",
  "مرحبا بك",
  "Aloha",
  "Kamusta",
  "Annyeong",
];

export default function AnimatedHello() {
  return (
    <ul id="elements">
      {helloWords.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
}