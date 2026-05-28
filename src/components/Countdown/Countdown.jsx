import { useEffect, useState } from "react";
import CountdownItem from "../CountdownItem/CountdownItem";
import "./Countdown.css";
import { getTimeRemaining } from "../../utils/Time";

const Countdown = ({date}) => {

  const weddingDate = new Date(`${date}T07:00:00`).getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);
  return (
    <div className="countdown-section">
      <h1 className="title">Countdown</h1>
      <div className="countdown-item-container">
        <CountdownItem label={"Hari"} value={timeLeft.days} />
        <CountdownItem label={"Jam"} value={timeLeft.hours} />
        <CountdownItem label={"Menit"} value={timeLeft.minutes} />
        <CountdownItem label={"Detik"} value={timeLeft.seconds} />
      </div>
      <div className="quote-section">
        <p className="quote">
          “Dan di antara tanda-tanda (kebesaran) -Nya adalah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya"
        </p>
        <p className="source">( Ar-Ruum ayat 21 )</p>
      </div>
    </div>
  );
};

export default Countdown;
