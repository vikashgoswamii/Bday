import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "../components/Confetti";
import FairyLights from "../components/FairyLights";
import FloatingHearts from "../components/FloatingHearts";
import { useNavigate } from "react-router-dom";

const wishes = [
  { emoji: "🌟", text: "Zindagi mein bohot saari khushiyan mile tujhe!" },
  { emoji: "💪", text: "Har sapna poora ho tera — dil se!" },
  {
    emoji: "🌸",
    text: "Jitna tu deti hai doosron ko — usse jayda hi tujhe mile!",
  },
  { emoji: "😂", text: "Hasi aur mazak kabhi khatam na ho humara!" },
  {
    emoji: "❤️",
    text: "Tera Vikki hamesha tere saath hai — life mein, fights mein, sab mein!",
  },
  { emoji: "🎂", text: "Ye 12 June 2026 tera sabse yaadgaar din bane!" },
];

export default function Final() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);

    const t = setTimeout(() => setShowAll(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-violet-800 relative overflow-hidden">
      <Confetti duration={15000} />
      <div className="absolute top-0 left-0 w-full z-10">
        <FairyLights />
      </div>
      <FloatingHearts count={20} />

      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-200 select-none pointer-events-none"
          style={{
            fontSize: `${8 + ((i * 3) % 14)}px`,
            left: `${(i * 2.5) % 100}%`,
            top: `${(i * 3.7) % 100}%`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 2 + (i % 4),
            delay: (i % 5) * 0.6,
          }}
        >
          ✦
        </motion.div>
      ))}

      <div className="relative z-20 flex flex-col items-center justify-start px-4 py-24 min-h-screen">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
          className="text-center mb-4"
        >
          <div className="text-7xl mb-4">🎂</div>
          <h1
            className="text-5xl md:text-8xl font-bold text-white drop-shadow-2xl"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Happy Birthday
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-6xl md:text-9xl font-extrabold mb-8"
        >
          <span className="bg-gradient-to-r from-yellow-200 via-white to-pink-200 bg-clip-text text-transparent">
            RITU! ❤️
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-10 text-center"
        >
          <p className="text-white/50 text-xs tracking-widest uppercase mb-4">
            Tere Vikki Ki Taraf Se 💌
          </p>
          <p
            className="text-white text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Ritu, tu meri life ka woh hissa hai jiske bina sab kuch incomplete
            lagta hai. Tere saath hasna, rona, ladna, aur phir Flirt karna 🤣🤣
            — ye sab moments mere liye bahut precious hain.
            <br />
            <br />
            Aaj tera birthday hai, aur main chahta hoon ki tujhe feel ho ki tu
            kitni special hai. Not just aaj — hamesha. Teri smile, teri baatein,
            teri madness — sab kuch mujhe bahut pasand hai.
            <br />
            <br />
            <strong className="text-pink-300">
              Jaa, khub khush reh. Khub jeey. Aur haan — mujhe kabhi mat bhoolna
              life time tak and promise bhi krna mujhse ki life time tak nahi
              bhukegi aur sath rhegi! 😌❤️
            </strong>
          </p>
          <p className="text-white/50 mt-4 text-sm">
            — Tere liye likha, dil se 🫶
          </p>
        </motion.div>

        {showAll && (
          <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {wishes.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + i * 0.15 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/15 transition-all"
              >
                <div className="text-4xl mb-2">{w.emoji}</div>
                <p
                  className="text-white/90 text-sm leading-relaxed"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {w.text}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.5)" }}
          >
            🎉 12 June 2026 🎉
          </motion.div>
          <p className="text-white/60 tracking-widest text-sm uppercase">
            Teri special day — hamesha ke liye yaad rahega!
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            className="mt-10 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/cake")}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
            >
              🎂 Let's Cut Ritu's Cake ❤️
            </motion.button>
          </motion.div>
        </motion.div>

        {["🎈", "🎊", "🎁", "🥳", "💖", "🌈"].map((e, i) => (
          <motion.div
            key={i}
            className="fixed text-5xl pointer-events-none select-none"
            style={{ left: `${10 + i * 15}%`, bottom: "-80px" }}
            animate={{ y: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              delay: i * 1.2,
              ease: "linear",
            }}
          >
            {e}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
