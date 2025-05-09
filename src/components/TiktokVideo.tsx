export default function TiktokVideo() {
  return (
    <div className="relative w-48 h-80 rounded-2xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
      <video
        src="/videos/erklaervideo.mp4"
        poster="/memes/meme2.jpg"
        className="w-full h-full object-cover"
        controls
        style={{ maxHeight: 320 }}
      />
      <div className="absolute bottom-2 left-2 bg-white/80 dark:bg-gray-900/80 px-3 py-1 rounded-full text-xs font-bold text-gray-800 dark:text-gray-100 animate-fade-in">
        29s • Mathe erklärt in TikTok-Style
      </div>
    </div>
  );
} 