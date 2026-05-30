import { useEffect, useState } from "react";
import "./Opening.css";

export default function Opening({ groom, bride, guest, onOpen, isClosing, images }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`opening-page ${isClosing ? "fade-out" : ""}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${
            index === currentIndex ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="overlay"></div>
      <div className="content-wrapper">
        <div className="content">
          <p className="subtitle">The Wedding Of</p>
          <h1 className="title">{bride} & {groom}</h1>
          <div className="guest-section">
            <p className="guest-label">Kpd Bpk/Ibu/Saudara/I</p>
            <h2 className="guest-name">{guest}</h2>
          </div>
          <button className="open-button" onClick={onOpen}>Buka Undangan</button>
        </div>
      </div>
    </div>
  );
}
