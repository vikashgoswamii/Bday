import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-700 to-violet-900 flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="text-8xl mb-6"
      >
        ❤️
      </motion.div>

      <h1 className="text-5xl font-bold text-white mb-6">Thank You Ritu</h1>

      <p className="text-white/90 max-w-xl text-xl leading-relaxed">
        Tumne puzzles solve kiye, gallery dekhi, cake cut kiya, Vikki ko cake
        khilaya, aur message bhi chhoda.
        <br />
        <br />
        Ye birthday website hamesha special rahegi. ✨
      </p>

      <div className="mt-10 text-4xl">🎂 💌 ❤️ 🎉</div>
      <div
        className="mt-6 text-lg text-white/70"
        style={{ fontStyle: "italic" }}
      >
        (Ab Vikki tumhare message ko padhne ke liye bahut excited hai! 💌)
      </div>
      <div>
        <button
          onClick={() => navigate("/")}
          className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold"
        >
          Start Again 🚀
        </button>
      </div>
    </div>
  );
}
