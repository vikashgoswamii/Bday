import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RituForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    message: "",
    bestThing: "",
    memory: "",
    promise: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("rituMessage", JSON.stringify(form));

    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-violet-900 flex items-center justify-center p-6">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md p-8 rounded-3xl w-full max-w-2xl border border-white/20"
      >
        <h1 className="text-4xl text-white font-bold text-center mb-8">
          💌 Message For Vikki
        </h1>

        <textarea
          placeholder="Vikki ke liye kuch likho..."
          className="w-full p-4 rounded-xl mb-4 bg-white/20 text-white"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <input
          placeholder="Meri sabse achhi baat 😊"
          className="w-full p-4 rounded-xl mb-4 bg-white/20 text-white"
          onChange={(e) => setForm({ ...form, bestThing: e.target.value })}
        />

        <input
          placeholder="Hamari best memory 📸"
          className="w-full p-4 rounded-xl mb-4 bg-white/20 text-white"
          onChange={(e) => setForm({ ...form, memory: e.target.value })}
        />

        <select
          className="w-full p-4 rounded-xl mb-6 bg-white/20 text-white"
          onChange={(e) => setForm({ ...form, promise: e.target.value })}
        >
          <option value="">Lifetime friendship? 🤝</option>
          <option value="Yes">Haan ❤️</option>
          <option value="Forever">Bilkul Forever ❤️❤️</option>
        </select>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold"
        >
          ❤️ Send To Vikki
        </button>
      </motion.form>
    </div>
  );
}
