'use client';

import Link from "next/link";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800 py-6 mt-8 flex flex-col items-center gap-4 animate-fade-in-up">
      <div className="flex gap-6 mb-2">
        <Link href="/impressum" className="text-sm hover:underline">Impressum</Link>
        <Link href="/datenschutz" className="text-sm hover:underline">Datenschutz</Link>
        <Link href="/agb" className="text-sm hover:underline">AGB</Link>
      </div>
      <div className="flex gap-4 mb-2">
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter size={24} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-pink-500 hover:scale-110 transition-transform"><FaInstagram size={24} /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" className="text-red-500 hover:scale-110 transition-transform"><FaYoutube size={24} /></a>
      </div>
      <form className="flex gap-2 items-center" onSubmit={e => e.preventDefault()} aria-label="Newsletter-Anmeldung">
        <input
          type="email"
          placeholder="E-Mail für Memes & News"
          className="px-3 py-2 rounded-l-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold text-sm hover:scale-105 transition-transform"
        >
          Anmelden
        </button>
      </form>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">© {new Date().getFullYear()} StudyBuddy. Made with ❤️</div>
    </footer>
  );
} 