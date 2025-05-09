"use client";
import QuizExample from "../../components/QuizExample";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MathePage() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("auth") !== "true") {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-xl flex flex-col gap-6 items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">Mathe-Quiz & Lernbereich</h2>
        <p className="text-center text-gray-700 dark:text-gray-200 mb-4">Teste dein Wissen und verbessere deine Skills mit unserem Mathe-Quiz!</p>
        <QuizExample />
      </div>
    </div>
  );
} 