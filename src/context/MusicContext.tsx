import { createContext, useContext, useState, ReactNode } from "react";

const MusicContext = createContext<any>(null);

export function MusicProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [started, setStarted] = useState(false);

  return (
    <MusicContext.Provider value={{ started, setStarted }}>
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);