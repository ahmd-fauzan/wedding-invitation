import { useEffect, useState } from "react";
import "./Cover.css";
import { invitationData } from "../../data/invitation";

export default function Cover({ groom, bride, date, address }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = invitationData.backgrounds;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const saveToCalendar = () => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formatted = `${year}${month}${day}T070000`;
    const startDate = formatted;
    const endDate = formatted;

    const title = `Wedding of ${bride} & ${groom}`;

    const details = "Join our wedding celebration";

    const location = address;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const formatted = date
    .toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "");

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

          <h1 className="title">
            {bride} & {groom}
          </h1>

          <h2 className="date">{formatted}</h2>

          <button className="open-button" onClick={saveToCalendar}>
            Save The Date
          </button>
        </div>
      </div>
    </div>
  );
}
