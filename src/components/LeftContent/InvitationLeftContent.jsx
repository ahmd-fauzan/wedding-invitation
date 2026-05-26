import "./InvitationLeftContent.css";

const InvitationLeftContent = () => {
  return (
    <div
      className="left-section"
      style={{ backgroundImage: "url('/images/gallery5.jpg')" }}
    >
      <div className="overlay"></div>
      <div className="content">
        <p className="subtitle animate-right">OUR WEDDING INVITATION</p>
        <h1 className="title animate-down">Ai Lina & Fauzan</h1>
        <p className="quote">
          “What counts in making a happy marriage is not so much how compatible
          you are, but how you deal with incompatibility. A great marriage is
          not when the perfect couple comes together. It is when an imperfect
          couple learns to enjoy their differences.”
        </p>
        <div className="guest-section">
          <p className="guest-label">Kepada Yth. Bapak/Ibu/Saudara/I</p>
          <h2 className="guest-name">Tamu Undangan</h2>
        </div>
      </div>
    </div>
  );
};

export default InvitationLeftContent;
