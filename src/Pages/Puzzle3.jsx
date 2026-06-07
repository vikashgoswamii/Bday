import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "../components/Confetti";

const Q = {
  emoji: "🎵",
  question:
    "Ritu, bata Frankfinn gaye the tab maine ek song lagaya tha jo video me bhi use kiya tha? 😎🎥",
  hint: "Hint: Ye song abhi bhi special hai ❤️",
  options: [
    "Kesariya Tera Ishq 🧡",
    "Main Hoon Na ❤️",
    "Tere Liye 💕",
    "O Maahi ✨",
  ],
  correct: 0,
  correctMsg:
    "Bilkul sahi! 🎉 Kesariya Tera Ishq 🧡. Frankfinn trip ki woh video aur woh moment aaj bhi yaad hai, kuki sirf besti-besti ki short trip thi wo, and wo ice cream aur gol gappe and your words was 'Khaoge Gol Gappe Kahoge...' 🤣✨",
};

export default function Puzzle3() {
  const [selected, setSelected] = useState(null);
  const [shake, setShake] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const navigate = useNavigate();

  const handle = (idx) => {
    setSelected(idx);
    if (idx === Q.correct) setConfetti(true);
    else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 flex items-center justify-center px-4 relative overflow-hidden">
      {confetti && <Confetti />}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-3xl select-none pointer-events-none"
          style={{ left: `${(i * 6) % 100}%`, top: `${(i * 11) % 100}%` }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 + i * 0.3 }}
        >
          {["🔑", "💜", "✨", "🌟", "🎊", "🦄"][i % 6]}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="flex gap-2 mb-8 justify-center">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-2 w-16 rounded-full bg-pink-400" />
          ))}
        </div>
        <p className="text-center text-xs text-white/50 tracking-widest uppercase mb-4">
          Final Puzzle 🔐
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-6xl text-center mb-6">{Q.emoji}</div>
          <h2
            className="text-xl md:text-2xl text-white text-center font-medium leading-relaxed mb-2 whitespace-pre-line"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            {Q.question}
          </h2>
          <p className="text-center text-white/50 text-sm mb-8 italic">
            {Q.hint}
          </p>

          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {Q.options.map((opt, idx) => {
              const ok = selected === Q.correct && idx === Q.correct;
              const bad = selected === idx && idx !== Q.correct;
              return (
                <motion.button
                  key={idx}
                  whileHover={selected === null ? { scale: 1.04 } : {}}
                  whileTap={selected === null ? { scale: 0.97 } : {}}
                  onClick={() => selected === null && handle(idx)}
                  className={`py-4 px-6 rounded-2xl text-white font-semibold text-left transition-all duration-300 cursor-pointer border
                    ${ok ? "bg-green-500/80 border-green-400 shadow-green-400/50 shadow-lg" : ""}
                    ${bad ? "bg-red-500/80 border-red-400" : ""}
                    ${selected === null ? "bg-white/10 border-white/20 hover:bg-white/20" : ""}
                    ${selected === Q.correct && !ok ? "bg-white/5 border-white/10 opacity-50" : ""}${selected !== null && !ok && !bad ? "bg-white/5 border-white/10 opacity-50" : ""}`}
                >
                  {opt}
                </motion.button>
              );
            })}
          </motion.div>

          <AnimatePresence>
            {selected === Q.correct && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <p
                  className="text-white/90 text-lg leading-relaxed mb-4"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {Q.correctMsg}
                </p>
                <p className="text-yellow-300 text-sm mb-6">
                  🎉 Teeno puzzles solve! Ab dekh tera actual surprise...
                </p>
                <p className="text-pink-300 text-lg mb-6">
                   Surprise Dekh aur mujhe imagine kr ki mai thuje khud bol raha hu aage ki cheezen! 🎁✨
                </p>

                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/timeline")}
                  className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-xl cursor-pointer text-lg"
                >
                 Click to see the surprise! 🎁
                </motion.button>
              </motion.div>
            )}
            {selected !== null && selected !== Q.correct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-center"
              >
                <p className="text-red-300">
                  Arre yaar! Itna bhi yaad nahi? 😂
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-3 text-white/60 underline text-sm cursor-pointer"
                >
                  Phir se try karo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
