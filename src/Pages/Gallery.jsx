import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✏️ Apni photos yahaan import karo:
import note from "../assets/photos/Note.jpeg";
import bikaner from "../assets/photos/bikaner.jpeg";
import bikaner2 from "../assets/photos/Bikaner2.jpeg";
import farewell from "../assets/photos/Farewell.jpeg";
import library from "../assets/photos/Library.jpeg";
import metro from "../assets/photos/Metro.jpeg";
import newYear from "../assets/photos/NewYear.jpeg";
import saari from "../assets/photos/Saaripic.jpeg";
// Phir: src: p1  (neeche array mein)
const photos = [
  {
    src: note,
    label: "Ritu handwritten note for Vikki 🌸",
    caption: "Ye wali photo yaad hai? 😂 Best day ever!",
  },
  {
    src: bikaner,
    label: "Bikaner Memories 🏺",
    caption: "Jab bikaner hamara cafe tha 😂 ",
  },
  {
    src: bikaner2,
    label: "Bikaner Adventures 🌟",
    caption: "Again bikaner cafe 😂 Best day ever!",
  },
  {
    src: farewell,
    label: "Farewell Party 🎉",
    caption: "Mujhe toh teri in pics se alag hi obsession hai 😂",
  },
  {
    src: library,
    label: "Library Vibes 📚",
    caption:
      "Ye wali photo yaad hai? jab mai chooro ki tyarh milne aaya tha 😂 Mera one of memorable day!",
  },
  {
    src: metro,
    label: "Metro Ride 🚇",
    caption: "Ye wali photo yaad hai? 😂 Jab tera exam dilane noida gaya tha.",
  },
  {
    src: newYear,
    label: "New Year Celebrations 🎊",
    caption: "Aur ye humne sath mai nayi saal ki suruaat kari thi 😍😍",
  },
  {
    src: saari,
    label: "Saari's Pic 🌟",
    caption: "Again mere liye obsession hai tu or teri pics 😂 😍😍",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-950 to-slate-900 px-4 py-16 relative overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            width: `${150 + i * 40}px`,
            height: `${150 + i * 40}px`,
            background: ["#f472b6", "#a855f7", "#ec4899", "#8b5cf6"][i % 4],
            left: `${(i * 13) % 90}%`,
            top: `${(i * 17) % 80}%`,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 5 + i, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Hamari{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Gallery
            </span>{" "}
            🫶
          </h1>
          <p className="text-white/50">Click any photo to see it better ✨</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(i)}
              className="relative cursor-pointer rounded-2xl overflow-hidden group aspect-square border border-white/10"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                {photo.label}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg w-full bg-white/10 rounded-3xl overflow-hidden border border-white/20 max-h-[90vh] overflow-y-auto"
              >
                <img
                  src={photos[selected].src}
                  alt=""
                  className="w-full object-contain max-h-[70vh]"
                />
                <div className="p-6">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
                    {photos[selected].label}
                  </p>
                  <p
                    className="text-white text-lg leading-relaxed"
                    style={{ fontFamily: "'Georgia',serif" }}
                  >
                    {photos[selected].caption}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-3 text-white/50 hover:text-white text-sm border-t border-white/10 cursor-pointer"
                >
                  Close ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/final")}
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
          >
            Asli Surprise 🎁🎉
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
