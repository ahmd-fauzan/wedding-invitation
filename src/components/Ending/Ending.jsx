import { useState, useEffect } from "react";
import { invitationData } from "../../data/invitation";
import "./Ending.css";

const Ending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = invitationData.backgrounds;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ending-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${
            index === currentIndex ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}

      <div className="overlay"></div>

      <div className="content-wrapper">
        <div className="content">
          <p className="subtitle">
            Suatu kebahagiaan & kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kami
          </p>
          <p className="subtitle">Kami Yang Berbahagia,</p>
          <h1 className="title">Ai Lina & Fauzan</h1>
        </div>
      </div>
    </div>
  );
};

export default Ending;
