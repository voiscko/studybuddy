import { FaRegLaughSquint, FaVideo, FaQuestionCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaRegLaughSquint className="text-yellow-400 animate-wiggle" size={48} aria-label="Memes" />,
    title: "Memes",
    desc: "Lernen mit Spaß – Memes, die Mathe erklären!",
  },
  {
    icon: <FaVideo className="text-blue-500 animate-pop" size={48} aria-label="Erklärvideos" />,
    title: "Erklärvideos",
    desc: "Kurze Clips, die alles verständlich machen.",
  },
  {
    icon: <FaQuestionCircle className="text-pink-500 animate-bounce" size={48} aria-label="Quiz" />,
    title: "Quiz",
    desc: "Teste dein Wissen mit witzigen Fragen!",
  },
];

export default function FeatureIcons() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
      {features.map((f, i) => (
        <div
          key={f.title}
          className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 shadow-lg transition-transform hover:scale-105 animate-fade-in"
        >
          {f.icon}
          <h3 className="mt-2 text-lg font-bold">{f.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
        </div>
      ))}
    </div>
  );
} 