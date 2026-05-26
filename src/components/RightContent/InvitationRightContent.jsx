import Countdown from "../Countdown/Countdown";
import Cover from "../Cover/Cover";
import Ending from "../Ending/Ending";
import Gallery from "../Gallery/Gallery";
import Gift from "../Gift/Gift";
import Introduction from "../Introduction/Introduction";
import Story from "../Story/Story";
import WeddingEvent from "../WeddingEvent/WeddingEvent";
import "./InvitationRightContent.css";

const InvitationRightContent = ({ data }) => {
  return (
    <div className="right-section">
      <Cover />
      <Countdown />
      <Introduction />
      <WeddingEvent />
      <Gallery data={data} />
      <Story />
      <Gift />
      <Ending />
    </div>
  );
};

export default InvitationRightContent;
