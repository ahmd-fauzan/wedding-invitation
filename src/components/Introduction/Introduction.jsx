import Divider from "../Divider/Divider";
import Profile from "../Profile/Profile";
import "./Introduction.css";

const Introduction = ({groomFullName, brideFullName, groomParent, brideParent, groomImage, brideImage}) => {
  return (
    <div className="introduction-section">
      <div className="content-wrapper">
        <p className="subtitle">Assalamualaikum Wr. Wb.</p>
        <p className="subtitle">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, Kami
          mengundang Bapak/Ibu/Saudara/i, untuk menghadiri Resepsi Pernikahan
          kami.
        </p>
        <Profile
          image={brideImage}
          name={brideFullName}
          parentName={brideParent}
        />
        <Divider />
        <Profile
          image={groomImage}
          name={groomFullName}
          parentName={groomParent}
        />
      </div>
    </div>
  );
};

export default Introduction;
