'use client';
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const memes = [
  { src: "/memes/meme1.jpg", alt: "Mathe-Meme 1", caption: "Wenn du die Lösung siehst und trotzdem nichts verstehst..." },
  { src: "/memes/meme2.jpg", alt: "Mathe-Meme 2", caption: "Mathe im Kopf: 2+2=5?" },
  { src: "/memes/meme3.jpg", alt: "Mathe-Meme 3", caption: "Wenn der Lehrer fragt und du so tust, als würdest du nachdenken." },
];

export default function MemeCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % memes.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current!);
  }, [index]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-gray-900/80 flex items-center justify-center">
        <Image
          src={memes[index].src}
          alt={memes[index].alt}
          width={400}
          height={256}
          className="object-contain w-full h-full transition-all duration-700"
          priority
        />
      </div>
      <div className="mt-4 text-center text-base text-gray-700 dark:text-gray-200 animate-fade-in">
        {memes[index].caption}
      </div>
    </div>
  );
} 