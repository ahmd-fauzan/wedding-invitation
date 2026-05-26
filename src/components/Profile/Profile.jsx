import "./Profile.css";

const Profile = ({ image, name, parentName }) => {
  return (
    <div className="profile-section">
      <img className="profile-border" src={image} alt="profile" />
      <div className="profile-content">
        <h2 className="profile-name">{name}</h2>
        <p className="subtitle">Son of</p>
        <p className="profile-parent">{parentName}</p>
      </div>
    </div>
  );
};

export default Profile;
