import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FairyLights from "../components/FairyLights";
import FloatingHearts from "../components/FloatingHearts";
import { useMusic } from "../context/MusicContext";
export default function OpeningPage() {
  const [lightOn, setLightOn] = useState(false);
  const [showSad, setShowSad] = useState(false);
  const navigate = useNavigate();
  const { setStarted } = useMusic();
  return (
    <div
      className={`relative h-screen w-full overflow-hidden transition-all duration-[2500ms] ${lightOn ? "bg-gradient-to-br from-pink-500 via-purple-600 to-violet-700" : "bg-black"}`}
    >

      <AnimatePresence>
        {!lightOn ? (
          <motion.div
            key="dark"
            className="flex h-full flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute w-40 h-40 rounded-full bg-white/20 blur-2xl"
            />
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setStarted(true); // music start
                setLightOn(true); // page light on
              }}
              className="relative h-24 w-24 rounded-full bg-white shadow-[0_0_40px_white] cursor-pointer"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-lg text-white/80 tracking-wider"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ritu vikki ne teri life mai aakr kuch is tyrah ujala kia ... jese
              is light ke button ko jalane se ujala hoga, try karke ✨
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="lit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full z-10"
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <FairyLights />
            </motion.div>

            <FloatingHearts />

            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[120px]" />
            </div>

            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-200 text-xs select-none pointer-events-none"
                style={{
                  left: `${(i * 3.3) % 100}%`,
                  top: `${(i * 7) % 100}%`,
                }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + (i % 4),
                  delay: (i % 5) * 0.4,
                }}
              >
                ✦
              </motion.div>
            ))}

            <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center">
                <motion.h1
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                  className="text-5xl md:text-7xl font-bold text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Happy Birthday
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="mt-4 text-6xl md:text-8xl font-extrabold flex items-center justify-center gap-4"
                >
                  <span className="bg-gradient-to-r from-pink-500 via-pink-500 to-pink-200 bg-clip-text text-transparent">
                    RITU
                  </span>
                  <motion.span
                    animate={{
                      scale: [1, 1.35, 1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      times: [0, 0.15, 0.3, 0.45, 1],
                    }}
                    className="text-red-900 drop-shadow-[0_0_30px_rgba(127,29,29,1)]"
                  >
                    ❤️
                  </motion.span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="mt-8 text-lg md:text-2xl text-white/90 leading-relaxed"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Aaj ka din normal nahi hai...
                  <br />
                  Kyuki aaj tera yaani ki RITU ka birthday hai 🎂
                  <br />
                  Aur tere Vikki ne tere liye ek special surprise prepare kiya
                  hai hope terko pasand aajaye bas. 🎂 ❤️
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                  className="mt-4 text-sm text-white/60 tracking-widest uppercase"
                >
                  Achha kuch puzzles solve kar... tab milega asli surprise 🔐
                </motion.p>

                {/* YES BUTTON */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.2 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/puzzle1")}
                  className="rounded-full bg-white px-8 py-4 text-lg font-bold text-purple-700 shadow-2xl cursor-pointer"
                >
                  🥰 Oky Vikki, mai ready hu ❤️
                </motion.button>

                {/* NO BUTTON */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.5 }}
                  whileHover={{
                    x: [0, -20, 20, -15, 15, 0],
                    rotate: [0, -5, 5, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowSad(true);

                    setTimeout(() => {
                      setShowSad(false);
                    }, 5000);
                  }}
                  className="rounded-full bg-red-500 px-8 py-4 text-lg font-bold text-white shadow-2xl cursor-pointer"
                >
                  🙈 Nahi, mujhe nahi karni ye bakwaas cheeze 😂
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
        <AnimatePresence>
          {showSad && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            >
              <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                {" "}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  className="text-[180px]"
                >
                  😭
                </motion.div>
                <div className="flex justify-center gap-4 mt-2 text-4xl">
                  <motion.span
                    animate={{ y: [0, 25], opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    💧
                  </motion.span>

                  <motion.span
                    animate={{ y: [0, 25], opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                  >
                    💧
                  </motion.span>
                </div>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  className="text-4xl font-bold text-white"
                >
                  Aisa Mat Bolo Ritu 💔😭
                </motion.div>
                <div className="mt-2 text-pink-100 text-lg">
                  Vikki ne itni mehnat se banaya hai 😭
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatePresence>
    </div>
  );
}
