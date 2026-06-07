import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../context/MusicContext";
// ✏️ Apna song yahan import karo:
import song from "../assets/music/MainHoonNahInstrumental.mp3";
const MUSIC_SRC = song;

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const { started } = useMusic();
  useEffect(() => {
    if (!started) return;

    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(console.error);
    }
  }, [started]);

  const toggle = () => {
    if (!audioRef.current || !MUSIC_SRC) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  if (!MUSIC_SRC)
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <div className="bg-black/50 text-white/40 text-xs px-3 py-2 rounded-full border border-white/10">
          🎵 song.mp3 add karo assets/music mein
        </div>
      </div>
    );

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-xl shadow-2xl cursor-pointer"
      >
        {playing ? (
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            🎵
          </motion.span>
        ) : (
          "🔇"
        )}
      </motion.button>
    </>
  );
}
