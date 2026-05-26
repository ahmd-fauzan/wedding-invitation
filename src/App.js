import { useState, useRef, useEffect } from "react";
import "./App.css";

import Invitation from "./pages/Invitation/Invitation";
import Opening from "./pages/Opeening/Opening";

import sound from "./music/music.mp3";

function App() {
  const audioRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    console.log("play music");
    if (!audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpen = () => {
    playMusic();

    setIsClosing(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 1000);
  };

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
  }, []);

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
