import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✏️ Apni aur Ritu ki real memories yahaan likho!
const memories = [
  {
    emoji: "🌱",
    year: "Pehli Mulaqaat",
    title: "Jab pehli baar mili thi...",
    color: "from-pink-500 to-rose-500",
    side: "left",
    description:
      "Wase to first time hum kisi aur ke through mile the... but thanks to them jinki wajah se humari dosti shuru hui and i totally remember hum delhi ja rahe the tab mile the but mai tab normal Hi Hello karta tha 🤣🤣!",
  },
  {
    emoji: "😂",
    year: "Pehli Funny chat",
    title: "Woh pehli Funny chat Facebbok se start hui...",
    color: "from-orange-500 to-yellow-500",
    side: "right",
    description:
      "Jesa ki previous puzzle mein bataya gaya tha...Facebook aur tune mere maje lene ki sochi ki iska pagal banati hu 😒😒😒, But dhree dhree hum ache dost banre thee and mai ustime bhi flirt kar deta the thujse 🤣🤣🤣",
  },

  {
    emoji: "🥷",
    year: "Hamari first fight",
    title: "Bhyi hamari fight🫡🫡",
    color: "from-indigo-500 to-purple-500",
    side: "left",
    description:
      "Wase toh Hamari ek hi baar fight hui thi wo bhi kisi aur ke kehne par tune mujhse baat band kardi thi 😒😒, Okay Okay lets not to talk about that shit, but that fight was a learning experience for both of us. and hamari dosti aur gheri hui uske baad. 🌟",
  },
  {
    emoji: "🌙",
    year: "Late Night Calls",
    title: "2 baje ke conversations...",
    color: "from-indigo-500 to-purple-500",
    side: "left",
    description:
      "Kitni raatein baat karte beet gayi hain — pahle hum kitni late night tak conversations karte the...bhyi shab ek din toh tu bua ke gayi thi and humne 3 hour se jayda call par baat kari aur kasam se tere sath toh ek bhi sec aesa nahi laga ki bore hora ya kuch, and recently bhi humne late night call kari and mere liye toh best part hote hai tere se call and tere notifications bhyii😍😍 🌟",
  },
  {
    emoji: "🎉",
    year: "Our Best Memories",
    title: "Woh moments mere favourite hai ab bhi...",
    color: "from-teal-500 to-cyan-500",
    side: "right",
    description:
      "Mere liye toh wo saare memories best hai jinme tu physcally present thi mere sath jaise ki, Delhi ghume, First time Burger King, New year par MacDonald, Frenkfinn visit, Gol gappe moments... aur thuje yaad hai mujhe batana jaroor 🦋",
  },
  {
    emoji: "💪",
    year: "Mushkil Waqt",
    title: "Jab life ne tough time diya...",
    color: "from-violet-500 to-fuchsia-500",
    side: "left",
    description:
      "Hum dono ek dusre ke har muskil wakt mai sath rahe, halaki explain karne ki jarurt nahi hai but ye hamari dosti ki timeline hai isly express kar raha hu, Starting mai whatsapp chats pr ek dusre ko support and fr life trauma support and fr funny part ki tere Exams karaye maine🤣🤣🤣🤣🤣🤣 usme toh accha khasa support kia maine trko yaad ho maybe ki maine apna Class test chhod kr tera exams karaya tha😍🤣",
  },
  {
    emoji: "🎓",
    year: "My Proud moment for you",
    title: "Vikki ke liye proud moments...",
    color: "from-violet-500 to-fuchsia-500",
    side: "left",
    description:
      "Mujhe teri line aaj bhi yaad hai jab Amity ki teri convocation ceremony thi and tune kaha tha ki 'Vikki tune meri degree karai hai and tu mere sath hai aaj ke din' Aur mai terko live degree awarded hote hue dekh raha tha Mera proud moment tha Tere ko lekr. ",
  },
  {
    emoji: "🌟",
    year: "Aaj — 12 June 2026",
    title: "Tera Birthday!",
    color: "from-yellow-400 to-pink-500",
    side: "right",
    description:
      "Aur aaj tera birthday hai! And aaj hume 9 years of friendship ho gaye hai and Bestfriendship ko kitne saal ho gaye ye tu mujhe batayegi. aur ye bhi batayegi ki tere according best part kia raha mujhko lekr. Again Happiestttttttt Birthdayyy RITUUUUU Vikki ki Taraf se! ❤️🎂",
  },
];

export default function Timeline() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900 px-4 py-16 relative overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: `${(i * 2) % 100}%`, top: `${(i * 3) % 100}%` }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            repeat: Infinity,
            duration: 2 + (i % 5),
            delay: (i % 4) * 0.5,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-white/50 text-sm tracking-widest uppercase mb-3">
            Humari Kahani 📖
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Georgia',serif" }}
          >
            Hamare Kuch{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Special Moments
            </span>
          </h1>
          <p className="text-white/60 text-lg">
            Woh sab jo humne saath jeea hai... ❤️
          </p>
        </motion.div>

        <div className="space-y-12">
          {memories.map((mem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: mem.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{mem.emoji}</span>
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${mem.color} bg-clip-text text-transparent`}
                  >
                    {mem.year}
                  </span>
                  <h3
                    className="text-white font-semibold text-lg"
                    style={{ fontFamily: "'Georgia',serif" }}
                  >
                    {mem.title}
                  </h3>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">{mem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/50 mb-6 text-sm">
            Aur ek aur cheez baaki hai... 👀
          </p>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/gallery")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer"
          >
            Photo Gallery Dekho 📸
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
