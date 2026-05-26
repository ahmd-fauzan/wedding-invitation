import Divider from "../Divider/Divider";
import Profile from "../Profile/Profile";
import "./Introduction.css";

const Introduction = () => {
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
          image={"/images/profile2.webp"}
          name={"Ai Lina Marlina"}
          parentName={"U. Lukman (Alm) & Wati Saripah"}
        />
        <Divider />
        <Profile
          image={"/images/profile1.webp"}
          name={"Ahmad Fauzan"}
          parentName={"Uyu Wahyudin & Imas Sumarni"}
        />
      </div>
    </div>
  );
};

export default Introduction;
