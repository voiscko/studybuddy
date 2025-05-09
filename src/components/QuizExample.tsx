'use client';

import { useState } from "react";

const questions = [
  {
    text: "Was ist 2 + 2?",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    text: "Wie viel ist 5 · 6?",
    answers: [
      { text: "30", correct: true },
      { text: "56", correct: false },
      { text: "11", correct: false },
      { text: "60", correct: false },
    ],
  },
  {
    text: "Was ist die Wurzel aus 9?",
    answers: [
      { text: "3", correct: true },
      { text: "9", correct: false },
      { text: "81", correct: false },
      { text: "6", correct: false },
    ],
  },
  {
    text: "Wie viel ist 12 : 4?",
    answers: [
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "8", correct: false },
      { text: "2", correct: false },
    ],
  },
  {
    text: "Was ist 7²?",
    answers: [
      { text: "49", correct: true },
      { text: "14", correct: false },
      { text: "21", correct: false },
      { text: "77", correct: false },
    ],
  },
];

const feedbacks = {
  correct: [
    "High Five! 🖐️ Richtig gelöst!",
    "Mathe-King! 👑",
    "Du bist schneller als der Taschenrechner!",
    "Nice! Das sitzt!",
    "Legendär! 🎉",
  ],
  wrong: [
    "Ups, das war nix! 😅 Versuch's nochmal!",
    "Fast! Aber nur fast...",
    "Mathe ist kein Hexenwerk – nochmal!",
    "Nope! Aber du schaffst das!",
    "Nicht verzweifeln, weiter geht's!",
  ],
};

function getRandomIndex(max: number, exclude: number) {
  let idx = Math.floor(Math.random() * max);
  while (idx === exclude) {
    idx = Math.floor(Math.random() * max);
  }
  return idx;
}

export default function QuizExample() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  function handleAnswer(idx: number) {
    setSelected(idx);
    const isCorrect = questions[current].answers[idx].correct;
    const fbArr = isCorrect ? feedbacks.correct : feedbacks.wrong;
    setFeedback(fbArr[Math.floor(Math.random() * fbArr.length)]);
    setTimeout(() => {
      setSelected(null);
      setFeedback("");
      setCurrent(getRandomIndex(questions.length, current));
    }, 1800);
  }

  return (
    <div className="w-full max-w-xs mx-auto p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-lg flex flex-col items-center animate-fade-in">
      <div className="font-bold text-lg mb-4">{questions[current].text}</div>
      <div className="flex flex-col gap-2 w-full">
        {questions[current].answers.map((a, i) => (
          <button
            key={a.text}
            className={`px-4 py-2 rounded-full border font-semibold transition-all duration-200
              ${selected === i
                ? a.correct
                  ? "bg-green-400 text-white"
                  : "bg-red-400 text-white"
                : "bg-gray-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-blue-900 text-gray-800 dark:text-gray-100"}
            `}
            onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            aria-label={`Antwort: ${a.text}`}
          >
            {a.text}
          </button>
        ))}
      </div>
      {feedback && (
        <div className="mt-4 text-base font-bold animate-pop text-blue-600 dark:text-yellow-300">
          {feedback}
        </div>
      )}
    </div>
  );
} 