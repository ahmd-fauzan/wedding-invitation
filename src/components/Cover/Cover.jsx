import { useEffect, useState } from "react";
import "./Cover.css";
import { invitationData } from "../../data/invitation";

export default function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = invitationData.backgrounds;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const saveToCalendar = () => {
    const startDate = "20260614T070000";
    const endDate = "20260614T120000";

    const title = "Wedding of Fauzan & Ai Lina";

    const details = "Join our wedding celebration";

    const location = "Tasikmalaya, Indonesia";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="cover-section">
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
          <p className="subtitle">The Wedding Of</p>

          <h1 className="title">Ai Lina & Fauzan</h1>

          <h2 className="date">Minggu 14 Juni 2026</h2>

          <button className="open-button" onClick={saveToCalendar}>Save The Date</button>
        </div>
      </div>
    </div>
  );
}
