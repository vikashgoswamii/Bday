import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "../components/Confetti";

function Flame({ delay = 0, blown = false }) {
  return (
    <AnimatePresence>
      {!blown && (
        <motion.div
          initial={{ scaleY: 1 }}
          exit={{ scaleY: 0, opacity: 0 }}
          className="relative flex flex-col items-center"
        >
          {/* Outer flame */}
          <motion.div
            animate={{
              scaleX: [1, 1.2, 0.9, 1.1, 1],
              scaleY: [1, 1.1, 0.95, 1.05, 1],
              rotate: [-3, 3, -2, 4, -3],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6 + delay,
              ease: "easeInOut",
            }}
            className="w-5 h-8 rounded-t-full rounded-b-sm"
            style={{
              background: "linear-gradient(to top, #ff6b00, #ffd700, #fff8dc)",
              boxShadow:
                "0 0 12px 4px rgba(255,150,0,0.7), 0 0 24px 8px rgba(255,100,0,0.4)",
              transformOrigin: "bottom center",
            }}
          />
          {/* Inner flame */}
          <motion.div
            animate={{ scaleX: [1, 0.8, 1], scaleY: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 + delay }}
            className="absolute bottom-1 w-2 h-4 rounded-t-full rounded-b-sm"
            style={{
              background: "linear-gradient(to top, #fff, #fffde0)",
              transformOrigin: "bottom center",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Candle({ color, delay, blown }) {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "-8px" }}>
      <Flame delay={delay} blown={blown} />
      {/* Candle body */}
      <motion.div
        animate={
          !blown
            ? {
                boxShadow: [
                  "0 0 8px 2px " + color + "88",
                  "0 0 16px 6px " + color + "44",
                  "0 0 8px 2px " + color + "88",
                ],
              }
            : {}
        }
        transition={{ repeat: Infinity, duration: 1.5 + delay }}
        className="w-4 h-14 rounded-sm relative overflow-hidden"
        style={{ background: color }}
      >
        {/* Stripe */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.4) 4px, rgba(255,255,255,0.4) 5px)",
          }}
        />
        {/* Wax drip */}
        <motion.div
          animate={{ height: [0, 6, 12, 6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + delay * 2,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1 w-2 rounded-b-full"
          style={{ background: "rgba(255,255,255,0.5)" }}
        />
      </motion.div>
      {/* Candle base */}
      <div
        className="w-5 h-1 rounded-sm"
        style={{ background: color, opacity: 0.7 }}
      />
    </div>
  );
}

const CANDLE_COLORS = [
  "#ff6b9d",
  "#a855f7",
  "#38bdf8",
  "#22c55e",
  "#ffd60a",
  "#f97316",
];

export default function Cake() {
  const [blown, setBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const blowCandles = () => {
    if (blown) return;
    setBlown(true);
    setShowConfetti(true);
    // Sparkle burst
    setSparkles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: 40 + Math.random() * 20,
        y: 20 + Math.random() * 30,
        angle: Math.random() * 360,
        color: ["#ffd700", "#ff6b9d", "#a855f7", "#38bdf8", "#22c55e"][i % 5],
      })),
    );
    setTimeout(() => setShowMessage(true), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {showConfetti && <Confetti duration={8000} />}

      {/* Stars bg */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
          style={{ left: `${(i * 2.5) % 100}%`, top: `${(i * 3.7) % 100}%` }}
          animate={{ opacity: [0.1, 0.7, 0.1] }}
          transition={{
            repeat: Infinity,
            duration: 2 + (i % 4),
            delay: (i % 6) * 0.4,
          }}
        />
      ))}

      {/* Sparkle burst on blow */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute pointer-events-none text-xl"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: [0, 1.5, 0],
            x: Math.cos((s.angle * Math.PI) / 180) * 120,
            y: Math.sin((s.angle * Math.PI) / 180) * 120,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {["✨", "⭐", "💫", "🌟"][s.id % 4]}
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-white/40 text-xs tracking-widest uppercase mb-2">
            Make a wish... 🌙
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Blow the Candles{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
              Ritu!
            </span>
          </h1>
        </motion.div>

        {/* CAKE */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
          className="relative flex flex-col items-center"
        >
          {/* Candles row */}
          <div className="flex gap-3 mb-0 z-10 relative">
            {CANDLE_COLORS.map((color, i) => (
              <Candle key={i} color={color} delay={i * 0.12} blown={blown} />
            ))}
          </div>

          {/* Top tier */}
          <motion.div
            animate={
              !blown
                ? {
                    boxShadow: [
                      "0 0 30px 10px rgba(168,85,247,0.3)",
                      "0 0 50px 20px rgba(168,85,247,0.5)",
                      "0 0 30px 10px rgba(168,85,247,0.3)",
                    ],
                  }
                : {}
            }
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative w-48 h-20 rounded-t-[50%] rounded-b-lg flex items-center justify-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
          >
            {/* Frosting drips */}
            {[10, 25, 40, 55, 70, 85].map((left, i) => (
              <motion.div
                key={i}
                animate={{ height: [8, 14, 8] }}
                transition={{ repeat: Infinity, duration: 2 + i * 0.3 }}
                className="absolute top-0 w-3 rounded-b-full bg-white/70"
                style={{ left: `${left}%` }}
              />
            ))}
            <span className="text-2xl z-10">🌸</span>
          </motion.div>

          {/* Middle tier */}
          <div
            className="relative w-64 h-24 flex items-center justify-center overflow-hidden rounded-sm"
            style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
          >
            {[8, 22, 36, 50, 64, 78, 92].map((left, i) => (
              <motion.div
                key={i}
                animate={{ height: [6, 12, 6] }}
                transition={{ repeat: Infinity, duration: 1.8 + i * 0.2 }}
                className="absolute top-0 w-3 rounded-b-full bg-white/60"
                style={{ left: `${left}%` }}
              />
            ))}
            {/* Dots decoration */}
            {[15, 30, 45, 60, 75].map((left, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.5 + i * 0.2 }}
                className="absolute w-3 h-3 rounded-full bg-white/50"
                style={{ left: `${left}%`, top: "40%" }}
              />
            ))}
            <span className="text-3xl z-10">✨</span>
          </div>

          {/* Bottom tier */}
          <div
            className="relative w-80 h-28 flex items-center justify-center overflow-hidden rounded-b-xl"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            {[5, 18, 31, 44, 57, 70, 83, 96].map((left, i) => (
              <motion.div
                key={i}
                animate={{ height: [8, 16, 8] }}
                transition={{ repeat: Infinity, duration: 2 + i * 0.25 }}
                className="absolute top-0 w-4 rounded-b-full bg-white/60"
                style={{ left: `${left}%` }}
              />
            ))}
            {/* Flowers */}
            {[12, 35, 58, 80].map((left, i) => (
              <motion.span
                key={i}
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 + i }}
                className="absolute text-xl"
                style={{ left: `${left}%`, bottom: "20%" }}
              >
                🌸
              </motion.span>
            ))}
            {/* Happy Birthday text */}
            <motion.p
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white font-bold text-lg z-10 drop-shadow-lg"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Happy Birthday! 🎂
            </motion.p>
          </div>

          {/* Plate */}
          <div
            className="w-96 h-4 rounded-full mt-1"
            style={{
              background: "linear-gradient(90deg, #e2e8f0, #f8fafc, #e2e8f0)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          />

          {/* Glow under cake */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-4 w-72 h-8 rounded-full blur-xl"
            style={{ background: "linear-gradient(90deg, #f472b6, #a855f7)" }}
          />
        </motion.div>

        {/* Blow button */}
        <AnimatePresence>
          {!blown && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1 }}
              className="mt-14 text-center"
            >
              <p className="text-white/50 text-sm mb-4">
                Ek wish karo dil mein... phir candles bujhao! 🌙
              </p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={blowCandles}
                className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="mr-2"
                >
                  💨
                </motion.span>
                Candles Bujhao!
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Post-blow message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center max-w-md"
            >
              <motion.p
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                🎉 Wish Poori Ho! 🎉
              </motion.p>
              <p className="text-white/70 text-lg mb-8">
                Teri dil ki wish sun li gayi hai aaj... aur main chahta hoon ki
                woh poori ho! 💕
              </p>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/cake-eat")}
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer"
              >
                Ab Ritu Ka Turn Hai ✍️
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
