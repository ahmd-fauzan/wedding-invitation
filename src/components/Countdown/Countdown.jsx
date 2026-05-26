import CountdownItem from "../CountdownItem/CountdownItem";
import "./Countdown.css";

const Countdown = () => {
  return (
    <div className="countdown-section">
      <h1 className="title">Countdown</h1>
      <div className="countdown-item-container">
        <CountdownItem label={"Hari"} value={"10"} />
        <CountdownItem label={"Jam"} value={"4"} />
        <CountdownItem label={"Menit"} value={"30"} />
        <CountdownItem label={"Detik"} value={"50"} />
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
