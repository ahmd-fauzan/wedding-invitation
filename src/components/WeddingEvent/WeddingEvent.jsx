import "./WeddingEvent.css";

const WeddingEvent = () => {
  const openMap = () => {
    const latitude = -7.313861;
    const longitude = 108.100278;

    window.open(
      `https://www.google.com/maps?q=${latitude},${longitude}`,
      "_blank",
    );
  };

  return (
    <div className="wedding-event-section">
      <div className="content">
        <div className="overlay"></div>
        <h2 className="title">Akad Nikah</h2>
        <h4 className="date">MINGGU</h4>
        <h3 className="date">14 / JUNI / 2026</h3>
        <p className="time">08:00 WIB - 11:00 WIB</p>
        <p className="address">
          Kp. Nanggorak RT.10/RW.05 Desa Jayamukti Kecamatan leuwisari Kab.
          Tasikmalaya
        </p>
        <button className="open-button" onClick={openMap}>Google Map</button>
      </div>
      <div className="content">
        <div className="overlay"></div>
        <h2 className="title">Resepsi Pernikahan</h2>
        <h4 className="date">MINGGU</h4>
        <h3 className="date">14 / JUNI / 2026</h3>
        <p className="time">11:00 WIB - Selesai</p>
        <p className="address">
          Kp. Nanggorak RT.10/RW.05 Desa Jayamukti Kecamatan leuwisari Kab.
          Tasikmalaya
        </p>
        <button className="open-button" onClick={openMap}>Google Map</button>
      </div>
    </div>
  );
};

export default WeddingEvent;
