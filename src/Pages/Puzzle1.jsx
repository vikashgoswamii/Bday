import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "../components/Confetti";
const Q = {
  emoji: "🌸",
  question:
    "Accha Ritu ye bata humari first time online chat kaise hui thi? 🤔",
  hint: "Socho... kya hum mile the tab hui ya kuch aur!",
  options: [
    "Ghumne gye the 🚌",
    "Birthday 🎂",
    "Whatsapp 🗨️",
    "Facebook Nitya Rao 📱 ",
  ],
  correct: 3,
  correctMsg:
    "Bilkul sahi! 🎉 Bhyi merko toh aaj bhi yaad hai kaise tune Nitya Rao se FB id banake msg kia and humne khoob baat bhi ki us id pr bhi 😂😂",
};

export default function Puzzle1() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 relative overflow-hidden">
      {confetti && <Confetti />}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10 text-4xl select-none pointer-events-none"
          style={{ left: `${(i * 5) % 100}%`, top: `${(i * 7) % 100}%` }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10 + i * 2,
            ease: "linear",
          }}
        >
          {["🌟", "✨", "💫", "🎂", "❤️", "🎈"][i % 6]}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="flex gap-2 mb-8 justify-center">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`h-2 rounded-full ${n === 1 ? "w-16 bg-pink-400" : "w-8 bg-white/30"}`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-white/50 tracking-widest uppercase mb-4">
          Puzzle 1 of 3 🔐
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-6xl text-center mb-6">{Q.emoji}</div>
          <h2
            className="text-xl md:text-2xl text-white text-center font-medium leading-relaxed mb-2"
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
                  className="text-white/90 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {Q.correctMsg}
                </p>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/puzzle2")}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-xl cursor-pointer"
                >
                  Agla Puzzle 🚀
                </motion.button>
              </motion.div>
            )}
            {selected !== null && selected !== Q.correct && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-center"
              >
                <p className="text-red-300">Arre nahi! 😅 Socho thoda aur...</p>
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
