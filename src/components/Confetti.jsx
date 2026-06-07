import { useEffect, useRef } from "react";

const COLORS = ["#ff4d6d","#ffd60a","#38bdf8","#22c55e","#c084fc","#fb7185","#f97316","#facc15"];

export default function Confetti({ duration = 5000 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: 8 + Math.random() * 10,
      h: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      shape: Math.random() > 0.5 ? "rect" : "circle",
    }));

    let animId;
    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pieces) {
        ctx.save();
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        if (p.shape === "circle") {
          ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > canvas.height + 20) { p.y = -20; p.x = Math.random() * canvas.width; }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();
    const stop = setTimeout(() => { running = false; cancelAnimationFrame(animId); ctx.clearRect(0, 0, canvas.width, canvas.height); }, duration);
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { running = false; cancelAnimationFrame(animId); clearTimeout(stop); window.removeEventListener("resize", resize); };
  }, [duration]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" style={{ width: "100vw", height: "100vh" }} />;
}