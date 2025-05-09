"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GamificationBar from "../components/GamificationBar";
import ExternalMemeCarousel from "../components/ExternalMemeCarousel";

export default function Home() {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("auth") === "true") {
      setIsAuth(true);
      router.push("/dashboard");
    } else {
      setIsAuth(false);
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center flex-1 text-center py-16 sm:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900">
        <img
          src="/memes/hero-bg.jpg"
          alt="Erfolgreiche Schüler"
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0"
          style={{ minHeight: '400px', maxHeight: '600px' }}
        />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
            Lernen wie ein Profi, lachen wie ein Meme.
          </h1>
          <div className="flex items-center gap-2 text-yellow-400 text-2xl font-bold animate-fade-in delay-100">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            <span className="text-gray-700 dark:text-gray-200 text-lg ml-2">4.8/5 (1.200+ Bewertungen)</span>
          </div>
          <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 animate-fade-in delay-200 max-w-xl">
            Die Lernplattform, die Mathe erklärt – mit Memes, Quiz und Gamification. Werde Teil der Community und verbessere deine Noten mit Spaß!
          </p>
          <Link
            href={isAuth ? "/dashboard" : "/login"}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform animate-bounce"
          >
            Jetzt kostenlos testen
          </Link>
        </div>
      </section>
      {/* Testimonials Carousel */}
      <section className="w-full bg-white/80 dark:bg-gray-900/80 py-8 overflow-x-hidden relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 animate-testimonials-slide" style={{ width: 'max-content' }}>
            {[
              { name: "Max S., 17", img: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5.0, text: "Hab Mathe endlich gecheckt! Von 4 auf 1, dank Memes und Quiz. Beste Plattform!" },
              { name: "Lea P., 16", img: "https://randomuser.me/api/portraits/women/44.jpg", rating: 4.8, text: "Endlich Spaß beim Lernen! Die Memes sind genial und die Erklärungen easy." },
              { name: "Jonas R., 18", img: "https://randomuser.me/api/portraits/men/65.jpg", rating: 4.7, text: "Mit Gamification und Quiz macht Mathe sogar Spaß. Meine Noten sind gestiegen!" },
              { name: "Sophie L., 15", img: "https://randomuser.me/api/portraits/women/68.jpg", rating: 4.9, text: "Ich hab Mathe gehasst – jetzt macht's sogar Spaß!" },
              { name: "Tim K., 19", img: "https://randomuser.me/api/portraits/men/77.jpg", rating: 4.8, text: "Beste Vorbereitung fürs Abi. Memes + Quiz = Erfolg!" },
              { name: "Anna W., 17", img: "https://randomuser.me/api/portraits/women/12.jpg", rating: 5.0, text: "Die Community ist super hilfsbereit. Ich fühl mich nicht mehr allein mit Mathe!" },
              { name: "Paul M., 16", img: "https://randomuser.me/api/portraits/men/23.jpg", rating: 4.7, text: "Schnelle Erfolge, coole Badges – so macht Lernen Laune." },
              { name: "Mia F., 18", img: "https://randomuser.me/api/portraits/women/33.jpg", rating: 4.9, text: "Ich hab endlich Spaß am Lernen. Die Memes sind Gold wert!" },
              { name: "Lukas B., 17", img: "https://randomuser.me/api/portraits/men/41.jpg", rating: 4.8, text: "Quiz, Memes, XP – das motiviert mich richtig!" },
              { name: "Emily S., 15", img: "https://randomuser.me/api/portraits/women/55.jpg", rating: 4.9, text: "Meine Noten sind besser und ich lache mehr beim Lernen!" },
            ].concat([
              { name: "Max S., 17", img: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5.0, text: "Hab Mathe endlich gecheckt! Von 4 auf 1, dank Memes und Quiz. Beste Plattform!" },
              { name: "Lea P., 16", img: "https://randomuser.me/api/portraits/women/44.jpg", rating: 4.8, text: "Endlich Spaß beim Lernen! Die Memes sind genial und die Erklärungen easy." },
              { name: "Jonas R., 18", img: "https://randomuser.me/api/portraits/men/65.jpg", rating: 4.7, text: "Mit Gamification und Quiz macht Mathe sogar Spaß. Meine Noten sind gestiegen!" },
              { name: "Sophie L., 15", img: "https://randomuser.me/api/portraits/women/68.jpg", rating: 4.9, text: "Ich hab Mathe gehasst – jetzt macht's sogar Spaß!" },
              { name: "Tim K., 19", img: "https://randomuser.me/api/portraits/men/77.jpg", rating: 4.8, text: "Beste Vorbereitung fürs Abi. Memes + Quiz = Erfolg!" },
              { name: "Anna W., 17", img: "https://randomuser.me/api/portraits/women/12.jpg", rating: 5.0, text: "Die Community ist super hilfsbereit. Ich fühl mich nicht mehr allein mit Mathe!" },
              { name: "Paul M., 16", img: "https://randomuser.me/api/portraits/men/23.jpg", rating: 4.7, text: "Schnelle Erfolge, coole Badges – so macht Lernen Laune." },
              { name: "Mia F., 18", img: "https://randomuser.me/api/portraits/women/33.jpg", rating: 4.9, text: "Ich hab endlich Spaß am Lernen. Die Memes sind Gold wert!" },
              { name: "Lukas B., 17", img: "https://randomuser.me/api/portraits/men/41.jpg", rating: 4.8, text: "Quiz, Memes, XP – das motiviert mich richtig!" },
              { name: "Emily S., 15", img: "https://randomuser.me/api/portraits/women/55.jpg", rating: 4.9, text: "Meine Noten sind besser und ich lache mehr beim Lernen!" },
            ]).map((user, i) => (
              <div key={i} className="inline-block w-72 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mx-2 transition-transform hover:scale-105 align-top">
                <img src={user.img} alt={user.name} className="w-16 h-16 rounded-full mb-2 mx-auto" />
                <div className="font-bold text-center whitespace-nowrap overflow-hidden text-ellipsis">{user.name}</div>
                <div className="text-yellow-400 text-center">{"★ ".repeat(Math.round(user.rating))}<span className="text-gray-700 dark:text-gray-200 text-sm ml-1">{user.rating.toFixed(1)}</span></div>
                <div className="text-gray-600 dark:text-gray-300 text-center mt-2 text-sm whitespace-normal break-words">„{user.text}“</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 py-8 animate-fade-in-up">
        <div className="flex-1 flex flex-col items-center bg-blue-100 dark:bg-blue-900 rounded-lg shadow p-6">
          <span className="text-4xl">🧠</span>
          <div className="font-bold mt-2">Memes zum Lernen</div>
          <div className="text-gray-600 dark:text-gray-300 text-center">Mathe erklärt mit Humor – so bleibt&#39;s hängen!</div>
        </div>
        <div className="flex-1 flex flex-col items-center bg-pink-100 dark:bg-pink-900 rounded-lg shadow p-6">
          <span className="text-4xl">🏆</span>
          <div className="font-bold mt-2">Gamification</div>
          <div className="text-gray-600 dark:text-gray-300 text-center">Sammle XP, Badges und werde Mathe-Profi!</div>
        </div>
        <div className="flex-1 flex flex-col items-center bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow p-6">
          <span className="text-4xl">📈</span>
          <div className="font-bold mt-2">Schneller Erfolg</div>
          <div className="text-gray-600 dark:text-gray-300 text-center">Steigere deine Noten mit Spaß und System.</div>
        </div>
      </section>
      {/* Erfolgsbilder */}
      <section className="max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-8 py-8 animate-fade-in-up">
        <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=400&h=200" alt="Noten-Boost" className="rounded-lg mb-2 w-full h-32 object-cover" />
          <div className="font-bold">Noten-Boost</div>
          <div className="text-gray-600 dark:text-gray-300 text-center mt-2">Von 4 auf 1 – echte Erfolgsgeschichten!</div>
        </div>
        <div className="flex-1 flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=200" alt="Mathe-Sieg" className="rounded-lg mb-2 w-full h-32 object-cover" />
          <div className="font-bold">Mathe-Sieg</div>
          <div className="text-gray-600 dark:text-gray-300 text-center mt-2">Mit Spaß und Motivation zum Erfolg.</div>
        </div>
      </section>
      {/* Meme Carousel */}
      <section className="max-w-3xl mx-auto w-full py-8 animate-fade-in-up">
        <ExternalMemeCarousel />
      </section>
      {/* Video & Quiz */}
      {/* Entfernt: Mathe-Quiz auf Landingpage */}
      {/* <section className="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-8 py-8 animate-fade-in-up">
        <div className="flex-1 flex flex-col items-center">
          <TiktokVideo />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <QuizExample />
        </div>
      </section> */}
      {/* Gamification */}
      <section className="max-w-2xl mx-auto w-full py-8 animate-fade-in-up">
        <GamificationBar />
      </section>
      {/* Footer Disclaimer */}
      <footer className="w-full bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800 py-6 mt-8 flex flex-col items-center gap-4 animate-fade-in-up text-xs text-gray-500 dark:text-gray-400">
        <div>© {new Date().getFullYear()} StudyBuddy. Made with ❤️</div>
        <div>Alle Testimonials und dargestellten Personen sind fiktiv. Ähnlichkeiten mit realen Personen sind rein zufällig.</div>
      </footer>
    </div>
  );
}