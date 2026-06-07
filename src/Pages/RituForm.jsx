import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RituForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    message: "",
    threeWords: "",
    memory: "",
    bestAt: "",
    promise: "",
    movieName: "",
    travelPlace: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.message.trim()) return alert("💌 Vikki ke liye kuch likho!");
    if (!form.threeWords.trim()) return alert("😊 3 words mein describe karo!");
    if (!form.memory.trim()) return alert("📸 Best memory batao!");
    if (!form.bestAt.trim()) return alert("🌟 Koi cheez batao!");
    if (!form.promise.trim()) return alert("🤝 Ek promise karo!");
    if (!form.movieName.trim()) return alert("🎬 Movie naam batao!");
    if (!form.travelPlace.trim()) return alert("✈️ Travel destination batao!");

    const formData = new FormData();
    formData.append("entry.2049510791", form.message);
    formData.append("entry.1294400006", form.threeWords);
    formData.append("entry.946682727", form.memory);
    formData.append("entry.1012774316", form.bestAt);
    formData.append("entry.455297859", form.promise);
    formData.append("entry.150873519", form.movieName);
    formData.append("entry.XXXXXXX", form.travelPlace); // 👈 last ID confirm karo

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSeKBodko0-sfgR8acB-dDNCgaG0oN5gr453HWiE5yyW0p_8NQ/formResponse",
      { method: "POST", mode: "no-cors", body: formData }
    );

    navigate("/thank-you");
  };

  const inputClass =
    "w-full p-4 rounded-xl mb-6 bg-white/20 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-pink-400";
  const labelClass = "block text-white font-semibold mb-2";

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

        <label className={labelClass}>Vikki ke liye kuch likho 💌</label>
        <textarea
          value={form.message}
          placeholder="Yahan likho..."
          rows={4}
          className={inputClass}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <label className={labelClass}>Vikki ko 3 words me describe karo 😊</label>
        <input
          value={form.threeWords}
          placeholder="3 words..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, threeWords: e.target.value })}
        />

        <label className={labelClass}>Hamari sabse special memory kaunsi hai? 📸</label>
        <input
          value={form.memory}
          placeholder="Koi yaadgaar moment..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, memory: e.target.value })}
        />

        <label className={labelClass}>Tumhare hisaab se main kis cheez me sabse achha hoon? 🌟</label>
        <input
          value={form.bestAt}
          placeholder="Kuch bhi..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, bestAt: e.target.value })}
        />

        <label className={labelClass}>Ek promise jo tum mujhse karna chahogi? 🤝</label>
        <input
          value={form.promise}
          placeholder="Promise karo..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, promise: e.target.value })}
        />

        <label className={labelClass}>Agar hamari friendship ek movie hoti, uska naam kya hota? 🎬</label>
        <input
          value={form.movieName}
          placeholder="Movie ka naam..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, movieName: e.target.value })}
        />

        <label className={labelClass}>Agar hum dono kahin travel kar sakein, toh kahan jayenge? ✈️</label>
        <input
          value={form.travelPlace}
          placeholder="Destination..."
          className={inputClass}
          onChange={(e) => setForm({ ...form, travelPlace: e.target.value })}
        />

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg hover:opacity-90 transition"
        >
          ❤️ Send To Vikki
        </button>
      </motion.form>
    </div>
  );
}