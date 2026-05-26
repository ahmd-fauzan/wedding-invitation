import "./RekeningItem.css";

const RekeningItem = ( {card_name, card_number}) => {
  const copyRekening = async ({number}) => {

  await navigator.clipboard.writeText(
    card_number
  );

  alert("Nomor rekening berhasil disalin");

};
  return (
    <div className="rekening-item-section">
      <div className="card-content">
        <div className="card-left">
          <img className="card-chip" src="./images/chip.webp" alt="chip" />
          <h3 className="card-name">{card_name}</h3>
          <p className="card-number">{card_number}</p>
        </div>
        <div className="card-right">
          <img className="bank-logo" src="/images/bca-logo.png" alt="bank logo" />
          <button className="copy-button" onClick={copyRekening}>Salin</button>
        </div>
      </div>
    </div>
  );
};

export default RekeningItem;
