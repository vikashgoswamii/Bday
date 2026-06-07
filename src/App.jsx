import { BrowserRouter, Routes, Route } from "react-router-dom";
import OpeningPage from "./pages/OpeningPage";
import Puzzle1 from "./pages/Puzzle1";
import Puzzle2 from "./pages/Puzzle2";
import Puzzle3 from "./pages/Puzzle3";
import Timeline from "./pages/Timeline";
import Gallery from "./pages/Gallery";
import Final from "./pages/Final";
import MusicPlayer from "./components/MusicPlayer";
import { MusicProvider } from "./context/MusicContext";
import Cake from "./Pages/Cake";
import CakeEat from "./Pages/CakeEat";
import RituForm from "./Pages/RituForm";
import ThankYou from "./Pages/Thankyou";
function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <MusicPlayer />
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/puzzle1" element={<Puzzle1 />} />
          <Route path="/puzzle2" element={<Puzzle2 />} />
          <Route path="/puzzle3" element={<Puzzle3 />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/final" element={<Final />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/cake-eat" element={<CakeEat />} />
          <Route path="/ritu-form" element={<RituForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;
