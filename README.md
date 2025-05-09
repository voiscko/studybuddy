<!-- ================== StudyBuddy README ================== -->

![StudyBuddy-animation](https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif)

# StudyBuddy

Dein moderner Begleiter für smartes, spielerisches Lernen.

---

## 🚀 Schnellstart

1. **Repository klonen**

   ```bash
   git clone https://github.com/voiscko/studybuddy.git
   cd studybuddy
   ```

2. **Abhängigkeiten installieren**

   ```bash
   npm install          # oder yarn install
   ```

3. **Im Entwicklungsmodus starten**

   ```bash
   npm run dev          # startet lokalen Server auf http://localhost:3000
   ```

---

## ✨ Features

* **Spielerische Quizze**: Mache aus Karteikarten spannende Challenge-Runden.
* **Echtzeit-Fortschrittsanzeige**: Sieh deine Streak, Punkte & Badges.
* **Dark- & Light-Mode**: Automatisch oder nach Wahl.
* **Intuitive UI**: Gebaut mit React, Tailwind CSS & Framer Motion.
* **Offline-Unterstützung**: Lerne auch ohne Internet weiter.

---

## 📦 Tech Stack

| Ebene      | Technologie        |
| ---------- | ----------------- |
| Frontend   | React / Vite      |
| Styling    | Tailwind CSS      |
| Animation  | Framer Motion     |
| State      | Redux Toolkit     |
| Storage    | IndexedDB (lokal) |
| Deployment | Vercel / Netlify  |

---

## 🔧 Installation & Konfiguration

1. Kopiere `.env.example` zu `.env` und setze deine Variablen:

   ```bash
   cp .env.example .env
   # Passe API_URL, AUTH_KEY, etc. an
   ```

2. Baue die Assets für Produktion:

   ```bash
   npm run build
   ```

3. Deployment zu deinem Lieblingshoster:

   * Vercel: Repo verbinden & `npm run build`
   * Netlify: `dist/`-Ordner per Drag & Drop hochladen

---

## 🎬 Demo & GIFs

<p align="center">
  <img src="https://media.giphy.com/media/l0HlSNOxJB956qwfK/giphy.gif" alt="Quiz-Animation" width="600" />
</p>

---

## 🛠️ Anwendungsbeispiele

> Erstelle ein neues Lern-Deck:

```js
import { createDeck } from 'studybuddy';

const deck = createDeck('Mathe Basics', [
  { question: '2+2', answer: '4' },
  { question: 'Quadratwurzel von 9', answer: '3' },
]);
deck.start();
```

> Abonniere Fortschritts-Updates:

```js
deck.on('progress', ({ correct, total }) => {
  console.log(`Du hast ${correct}/${total} richtig beantwortet!`);
});
```

---

## 💡 Mitwirken

1. Forke das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feat/coole-funktion`)
3. Committe deine Änderungen (`git commit -m 'feat: coole Funktion hinzugefügt'`)
4. Push auf deinen Branch (`git push origin feat/coole-funktion`)
5. Erstelle einen Pull Request

Bitte beachte unseren [Code of Conduct](CODE_OF_CONDUCT.md) und die [Contributing Guidelines](CONTRIBUTING.md).

---

## 📄 Lizenz

MIT © [Dein Name]

---

Mit ♥️ & ☕ vom StudyBuddy-Team
