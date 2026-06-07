import { motion } from "framer-motion";

export default function FloatingHearts({ count = 12 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none select-none z-30"
          style={{ left: `${5 + (i * 8.5) % 90}%`, fontSize: `${16 + (i % 3) * 8}px`, bottom: "-60px" }}
          animate={{ y: [0, -900], x: [0, (i % 2 === 0 ? 40 : -40)], opacity: [0, 0.8, 0] }}
          transition={{ repeat: Infinity, duration: 5 + i * 0.8, delay: i * 0.6, ease: "easeOut" }}
        >
          {["❤️", "💕", "💗", "💖", "💝"][i % 5]}
        </motion.div>
      ))}
    </>
  );
}