import { motion } from "framer-motion";

const colors = ["#ff4d6d","#ffd60a","#38bdf8","#22c55e","#c084fc","#fb7185"];

export default function FairyLights() {
  return (
    <div className="absolute top-0 left-0 w-full z-20">
      <svg viewBox="0 0 1200 120" className="w-full h-[120px]" preserveAspectRatio="none">
        <path d="M0 40 C200 120 400 0 600 40 C800 80 1000 0 1200 40"
          stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
      </svg>
      <div className="absolute top-0 left-0 w-full h-[120px]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute" style={{ left: `${(i + 1) * 5}%`, top: `${40 + Math.sin(i) * 20}px` }}>
            <div className="w-[2px] h-8 bg-white/50 mx-auto" />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 + (i % 5) * 0.3 }}
              className="w-5 h-5 rounded-full"
              style={{
                background: colors[i % colors.length],
                boxShadow: `0 0 20px ${colors[i % colors.length]}, 0 0 40px ${colors[i % colors.length]}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}