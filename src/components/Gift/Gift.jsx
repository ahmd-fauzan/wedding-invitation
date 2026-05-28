import RekeningItem from "../RekeningItem/RekeningItem";
import "./Gift.css";

const Gift = ({ cardNumbers }) => {
  return (
    <div className="gift-section">
      <h1 className="title">Our Gift</h1>
      <p className="subtitle">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
        jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi gift
      </p>
      {cardNumbers.map((card, index) => (
        <RekeningItem card_name={card.cardName} card_number={card.cardNumber} />
      ))}
    </div>
  );
};

export default Gift;
