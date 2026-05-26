import { invitationData } from "../../data/invitation";
import InvitationLeftContent from "../../components/LeftContent/InvitationLeftContent";
import InvitationRightContent from "../../components/RightContent/InvitationRightContent";
import "./Invitation.css";

const Invitation = () => {
  const data = invitationData;

  // ambil nama tamu dari URL
  // const query = new URLSearchParams(window.location.search);
  // const guest = query.get("to");

  return (
    <div className="invitation-page">
      <InvitationLeftContent />
      <InvitationRightContent data={data}/>
    </div>
  );
};

export default Invitation;
