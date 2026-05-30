import InvitationLeftContent from "../../components/LeftContent/InvitationLeftContent";
import InvitationRightContent from "../../components/RightContent/InvitationRightContent";
import "./Invitation.css";

const Invitation = ({data, guest}) => {

  return (
    <div className="invitation-page">
      <InvitationLeftContent groom={data.groom} bride={data.bride} guest={guest} image={data.backgrounds[0]}/>
      <InvitationRightContent data={data}/>
    </div>
  );
};

export default Invitation;
