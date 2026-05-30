import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Story.css";

const Story = ({ stories }) => {
  return (
    <div className="story-section">
      <h1 className="title">Love Story</h1>
      <div className="story-column">
        {stories.map((story, index) => (
          <div className="story-row" key={index}>
            <div className="item-left">
              <div className="icon-circle">
                <img src="/images/icons/love_icon.png" alt="love icon" />
              </div>
              {
                index !== stories.length - 1 ? <div className="line"></div> : ""
              }
            </div>
            <div className="item-right">
              <ScrollReveal>
                <div className="panel">
                  <p className="story-title">{story.title}</p>
                  <p className="story-description">{story.desc}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
        {/* <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
            <div className="line"></div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">{firstStory.title}</p>
                <p className="story-description">{firstStory.desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
            <div className="line"></div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">{secondStory.title}</p>
                <p className="story-description">{secondStory.desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="story-row">
          <div className="item-left">
            <div className="icon-circle">
              <img src="/images/icons/love_icon.png" alt="love icon" />
            </div>
          </div>
          <div className="item-right">
            <ScrollReveal>
              <div className="panel">
                <p className="story-title">{thirdStory.title}</p>
                <p className="story-description">{thirdStory.desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Story;
