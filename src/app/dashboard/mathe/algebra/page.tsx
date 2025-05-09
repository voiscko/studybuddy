"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    text: "Löse: 2x + 3 = 7",
    answers: [
      { text: "x = 2", correct: true },
      { text: "x = 5", correct: false },
      { text: "x = 1", correct: false },
      { text: "x = -2", correct: false },
    ],
  },
  {
    text: "Was ist die binomische Formel für (a+b)²?",
    answers: [
      { text: "a² + 2ab + b²", correct: true },
      { text: "a² - 2ab + b²", correct: false },
      { text: "a² + b²", correct: false },
      { text: "2a + 2b", correct: false },
    ],
  },
  {
    text: "Löse: 3x = 12",
    answers: [
      { text: "x = 4", correct: true },
      { text: "x = 9", correct: false },
      { text: "x = 36", correct: false },
      { text: "x = 15", correct: false },
    ],
  },
  {
    text: "Was ist das Ergebnis von 5²?",
    answers: [
      { text: "25", correct: true },
      { text: "10", correct: false },
      { text: "15", correct: false },
      { text: "20", correct: false },
    ],
  },
];

function getRandomIndex(max: number, exclude: number) {
  let idx = Math.floor(Math.random() * max);
  while (idx === exclude) {
    idx = Math.floor(Math.random() * max);
  }
  return idx;
}

export default function AlgebraQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const router = useRouter();

  function handleAnswer(idx: number) {
    setSelected(idx);
    const isCorrect = questions[current].answers[idx].correct;
    setFeedback(isCorrect ? "Richtig! 🎉" : "Leider falsch! 😅");
    setTimeout(() => {
      setSelected(null);
      setFeedback("");
      setCurrent(getRandomIndex(questions.length, current));
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-lg flex flex-col gap-6 items-center">
        <button onClick={() => router.back()} className="self-start text-blue-500 hover:underline mb-2">← Zurück zu den Kategorien</button>
        <h2 className="text-2xl font-bold mb-2 text-center">Algebra-Quiz</h2>
        <div className="w-full max-w-xs mx-auto p-4 rounded-xl bg-blue-50 dark:bg-blue-900/60 shadow-lg flex flex-col items-center animate-fade-in">
          <div className="font-bold text-lg mb-4 text-center">{questions[current].text}</div>
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
      </div>
    </div>
  );
} 