import "./CountdownItem.css";

const CountdownItem = ({label, value}) => {
  return (
    <div className="countdown-item">
      <h3 className="countdown-value">{value}</h3>
      <p className="countdown-label">{label}</p>
    </div>
  );
};

export default CountdownItem;
