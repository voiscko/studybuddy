"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const categories = [
  { key: "algebra", label: "Algebra", icon: "➗", color: "from-blue-400 to-blue-600", active: true },
  { key: "geometrie", label: "Geometrie", icon: "📐", color: "from-pink-400 to-pink-600", active: false },
  { key: "analysis", label: "Analysis", icon: "📊", color: "from-yellow-400 to-yellow-600", active: false },
  { key: "stochastik", label: "Stochastik", icon: "🎲", color: "from-green-400 to-green-600", active: false },
  { key: "sachaufgaben", label: "Sachaufgaben", icon: "🧮", color: "from-purple-400 to-purple-600", active: false },
];

export default function MathePage() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("auth") !== "true") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-2xl flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">Mathe-Kategorien</h2>
        <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Wähle ein Thema und übe gezielt wie bei Quizlet oder Kahoot!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {categories.map(cat => (
            cat.active ? (
              <button
                key={cat.key}
                onClick={() => router.push(`/dashboard/mathe/${cat.key}`)}
                className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-8 bg-gradient-to-br ${cat.color} text-white font-bold text-xl gap-2 hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-pink-400`}
                style={{ minHeight: 140 }}
              >
                <span className="text-4xl">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ) : (
              <div
                key={cat.key}
                className={`flex flex-col items-center justify-center rounded-xl shadow-lg p-8 bg-gradient-to-br ${cat.color} text-white font-bold text-xl gap-2 opacity-50 cursor-not-allowed relative`}
                style={{ minHeight: 140 }}
                aria-disabled="true"
              >
                <span className="text-4xl">{cat.icon}</span>
                <span>{cat.label}</span>
                <span className="absolute bottom-2 text-xs italic text-white/80">Coming Soon</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 