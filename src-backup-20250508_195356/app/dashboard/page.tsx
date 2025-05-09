"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ExternalMemeCarousel from "../../components/ExternalMemeCarousel";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("auth") !== "true") {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-80 flex flex-col gap-4 items-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Willkommen im Dashboard!</h2>
        <p className="text-center text-gray-700 dark:text-gray-200 mb-2">Hier findest du alle Mathe-Tools, Memes und Quiz zum Durchstarten!</p>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">Logout</button>
      </div>
      {/* Fächer-Kacheln */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {/* Mathe-Kachel */}
        <a href="/dashboard/mathe" className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform cursor-pointer">
          <span className="text-5xl mb-2">📐</span>
          <span className="font-bold text-xl mb-1">Mathe</span>
          <span className="text-sm">Lern-Memes, Quiz & mehr</span>
        </a>
        {/* Deutsch-Kachel (Coming Soon) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-500 rounded-xl shadow-lg p-8 opacity-60 cursor-not-allowed">
          <span className="text-5xl mb-2">📖</span>
          <span className="font-bold text-xl mb-1">Deutsch</span>
          <span className="text-xs italic">Coming Soon</span>
        </div>
        {/* Englisch-Kachel (Coming Soon) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-500 rounded-xl shadow-lg p-8 opacity-60 cursor-not-allowed">
          <span className="text-5xl mb-2">🇬🇧</span>
          <span className="font-bold text-xl mb-1">Englisch</span>
          <span className="text-xs italic">Coming Soon</span>
        </div>
        {/* Biologie-Kachel (Coming Soon) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-500 rounded-xl shadow-lg p-8 opacity-60 cursor-not-allowed">
          <span className="text-5xl mb-2">🧬</span>
          <span className="font-bold text-xl mb-1">Biologie</span>
          <span className="text-xs italic">Coming Soon</span>
        </div>
        {/* Chemie-Kachel (Coming Soon) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-500 rounded-xl shadow-lg p-8 opacity-60 cursor-not-allowed">
          <span className="text-5xl mb-2">⚗️</span>
          <span className="font-bold text-xl mb-1">Chemie</span>
          <span className="text-xs italic">Coming Soon</span>
        </div>
        {/* Geschichte-Kachel (Coming Soon) */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-500 rounded-xl shadow-lg p-8 opacity-60 cursor-not-allowed">
          <span className="text-5xl mb-2">🏛️</span>
          <span className="font-bold text-xl mb-1">Geschichte</span>
          <span className="text-xs italic">Coming Soon</span>
        </div>
      </div>
      <div className="w-full max-w-2xl">
        <ExternalMemeCarousel />
      </div>
    </div>
  );
} 