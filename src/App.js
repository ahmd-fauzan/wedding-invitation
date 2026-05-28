import { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";

import Invitation from "./pages/Invitation/Invitation";
import Opening from "./pages/Opeening/Opening";

import sound from "./music/music.mp3";
import { invitationData } from "./data/invitation";

function App() {
  const data = invitationData;

  const audioRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guest, setGuest] = useState("");

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("guest")

    if(guestName){
      setGuest(guestName);
    }
    else{
      setGuest("Tamu Undangan");
    }
  }, [guest]);

  return (
    <>
      {(isOpened || isClosing) && <Invitation data={data} guest={guest}/>}

      {!isOpened && <Opening groom={data.groom} bride={data.bride} guest={guest} onOpen={handleOpen} isClosing={isClosing} />}

      <audio ref={audioRef} loop>
        <source src={sound} type="audio/mpeg" />
      </audio>
    </>
  );
}

export default App;
