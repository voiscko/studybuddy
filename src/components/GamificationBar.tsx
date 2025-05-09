import { FaMedal, FaStar, FaTrophy } from "react-icons/fa";

export default function GamificationBar() {
  return (
    <div className="w-full flex flex-col items-center gap-4 animate-fade-in">
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-6 flex items-center relative overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-400 to-pink-400 h-6 rounded-full transition-all duration-700"
          style={{ width: "65%" }}
        />
        <span className="absolute left-2 text-xs font-bold text-white drop-shadow">Level 3</span>
        <span className="absolute right-2 text-xs font-bold text-white drop-shadow">65%</span>
      </div>
      <div className="flex gap-4 mt-2">
        <FaMedal className="text-yellow-400 animate-pop" size={32} title="Bronze Badge" />
        <FaStar className="text-blue-400 animate-wiggle" size={32} title="Stern Badge" />
        <FaTrophy className="text-pink-400 animate-bounce" size={32} title="Trophäe" />
      </div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Sammle Badges und steigere dein Level!</div>
    </div>
  );
} 