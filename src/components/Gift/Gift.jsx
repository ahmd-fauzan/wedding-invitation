import RekeningItem from '../RekeningItem/RekeningItem';
import './Gift.css';

const Gift = () => {
    return (
        <div className="gift-section">
            <h1 className="title">Our Gift</h1>
            <p className='subtitle'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi gift</p>
            <RekeningItem card_name={"Ai Lina Marlina"} card_number={"0834798748"}/>
            <RekeningItem card_name={"Ahmad Fauzan"} card_number={"184789874"}/>
        </div>
    );
};

export default Gift;