import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CakeEat() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-700 to-violet-900 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Floating Hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl pointer-events-none"
          style={{
            left: `${(i * 5) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + (i % 4),
          }}
        >
          {["❤️", "💕", "💖", "✨"][i % 4]}
        </motion.div>
      ))}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-center z-10"
      >
        <div className="text-[120px]">🍰</div>

        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl md:text-6xl font-bold text-white mt-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Cake Time 😋
        </motion.h1>

        <p className="text-white/90 text-lg md:text-2xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Yayyy! 🎉
          <br />
          Ritu ne Vikki ko cake khila diya 🍰❤️
          <br />
          Ab birthday officially celebrate ho gaya!
        </p>

        <motion.div
          animate={{
            rotate: [0, -5, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-7xl mt-8"
        >
          😋🍰
        </motion.div>

        <button onClick={() => navigate("/ritu-form")}>
          💌 Vikki Ke Liye Kuch Likho
        </button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/ritu-form")}
          className="mt-10 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
        >
          💌 Vikki Ke Liye Kuch Likho
        </motion.button>
      </motion.div>
    </div>
  );
}
