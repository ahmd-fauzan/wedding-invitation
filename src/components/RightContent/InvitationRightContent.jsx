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
      <Cover
        groom={data.groom}
        bride={data.bride}
        date={new Date(data.date)}
        address={data.address}
      />
      <Countdown date={data.date} />
      <Introduction
        groomFullName={data.groomFullName}
        brideFullName={data.brideFullName}
        groomParent={data.groomParent}
        brideParent={data.brideParent}
        groomImage={data.groomProfile}
        brideImage={data.brideProfile}
      />
      <WeddingEvent date={data.date} address={data.address}/>
      <Gallery data={data} />
      <Story stories={data.story}/>
      <Gift cardNumbers={data.cardNumbers}/>
      <Ending />
    </div>
  );
};

export default InvitationRightContent;
