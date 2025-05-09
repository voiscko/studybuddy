"use client";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-900 dark:to-blue-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-center text-pink-600 dark:text-pink-400">Registrierung nicht möglich</h2>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Dieser Service ist aktuell nur als <span className="font-bold text-blue-500">Demo</span> für zukünftige Kunden verfügbar.<br/>
          Eine Registrierung ist derzeit nicht vorgesehen.<br/>
          <span className="italic text-sm text-gray-400">(Kein echtes Endprodukt – nur ein Showcase!)</span>
        </p>
        <a href="/login" className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform">Zurück zum Login</a>
      </div>
    </div>
  );
} 