"use client";
import React, { useEffect, useState, useRef } from "react";

// 1. Subreddits für schulische/lernbezogene Memes
const SCHOOL_SUBREDDITS = [
  "schoolmemes", "mathmemes", "learnmemes", "chemistrymemes", "biologymemes", "physicsmemes", "engineeringmemes", "collegehumor", "studentlife", "teachers", "historymemes"
];

const API_URL = `https://meme-api.com/gimme/${SCHOOL_SUBREDDITS.join(",")}/20`;

const FILTER_KEYWORDS = [
  "schule", "school", "mathe", "math", "lernen", "study", "exam", "test", "note", "teacher", "lehrer", "bio", "physik", "chemie", "history", "englisch", "deutsch", "student", "uni", "university", "class", "quiz", "lernen"
];

const ROTATE_INTERVAL = 3500; // ms

// Fallback-Memes (lokal)
const FALLBACK_MEMES = [
  { url: "/memes/meme1.jpg", title: "Wenn du die Lösung siehst und trotzdem nichts verstehst..." },
  { url: "/memes/meme2.jpg", title: "Mathe im Kopf: 2+2=5?" },
  { url: "/memes/meme3.jpg", title: "Wenn der Lehrer fragt und du so tust, als würdest du nachdenken." },
];

// Komponente lädt schulische Memes und zeigt sie als Autoplay-Carousel
const ExternalMemeCarousel = () => {
  // State für Memes, Lade- und Fehlerstatus
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Lädt Memes beim Mounten der Komponente
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(API_URL);
        const data = await res.json();
        let filtered = (data.memes || []).filter(meme =>
          FILTER_KEYWORDS.some(kw => meme.title?.toLowerCase().includes(kw))
        );
        // Wenn nach Filterung nichts übrig bleibt, nimm alle Memes der API
        if (filtered.length === 0 && data.memes) filtered = data.memes;
        // Wenn immer noch nichts, nimm Fallback
        setMemes(filtered.length > 0 ? filtered : FALLBACK_MEMES);
      } catch (e) {
        setError(true);
        setMemes(FALLBACK_MEMES);
      } finally {
        setLoading(false);
      }
    };
    fetchMemes();
  }, []);

  // Autoplay-Logik: alle X Sekunden nächstes Meme
  useEffect(() => {
    if (memes.length < 2) return;
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % memes.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, [memes]);

  // Pausieren bei Hover/Touch
  const pauseCarousel = () => clearInterval(intervalRef.current);
  const resumeCarousel = () => {
    if (memes.length < 2) return;
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % memes.length);
    }, ROTATE_INTERVAL);
  };

  // Zeige Lade- oder Fehlermeldung
  if (loading) return <div className="text-center py-8">Loading…</div>;
  if (error && memes.length === 0) return <div className="text-center text-red-500 py-8">Konnte Memes nicht laden.</div>;

  // Carousel-Layout: Ein Bild im Fokus, smoothes Fade, keine Scrollbar
  return (
    <div className="w-full max-w-xl mx-auto px-2 select-none">
      <div
        className="relative h-72 flex items-center justify-center"
        onMouseEnter={pauseCarousel}
        onMouseLeave={resumeCarousel}
        onTouchStart={pauseCarousel}
        onTouchEnd={resumeCarousel}
        aria-label="Schul-Meme-Carousel"
      >
        {memes.map((meme, i) => (
          <img
            key={meme.url + i}
            src={meme.url}
            alt={meme.title || 'Meme Bild'}
            className={`absolute w-full h-72 object-contain rounded-xl shadow-lg transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ left: 0, top: 0 }}
            loading="lazy"
            aria-hidden={i !== index}
          />
        ))}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-900/80 px-4 py-1 rounded-full text-xs font-bold text-gray-800 dark:text-gray-100 shadow animate-fade-in">
          {memes[index]?.title}
        </div>
        {/* Indikator-Punkte */}
        <div className="absolute bottom-2 right-4 flex gap-1">
          {memes.map((_, i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExternalMemeCarousel;

// --- Integrationstipp ---
// Um das Meme-Carousel zu verwenden, importiere es z.B. in pages/index.js oder App.jsx:
// import ExternalMemeCarousel from "../components/ExternalMemeCarousel";
// ...
// <ExternalMemeCarousel /> 