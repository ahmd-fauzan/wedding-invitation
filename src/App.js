import { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";

import Invitation from "./pages/Invitation/Invitation";
import Opening from "./pages/Opeening/Opening";

import sound from "./music/music.mp3";

function App() {
  const audioRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = useCallback(() => {
    console.log("play music");
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        console.log(isPlaying);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isPlaying]);

  const handleOpen = () => {
    playMusic();

    setIsClosing(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 1000);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    playMusic();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audioRef.current.pause();
      } else {
        playMusic();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [playMusic]);

  return (
    <>
      {(isOpened || isClosing) && <Invitation />}

      {!isOpened && <Opening onOpen={handleOpen} isClosing={isClosing} />}

      <audio ref={audioRef} loop>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;
