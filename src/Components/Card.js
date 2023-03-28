import { useState } from "react";
import cardBack from "../Images/cardback.png";

const Card = (props) => {
    const [cardImg, setCardImg] = useState(cardBack);
    return(
        <div className="Card"
        style={{backgroundImage: `url(${cardImg})`}}
        onClick={() => setCardImg(props.cardFront)}
        >
        </div>
    );
}

export default Card;