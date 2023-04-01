import { useState } from "react";
import cardBack from "../Images/cardback.png";

const Card = ({value, roundScore, cardFront, setRoundScore}) => {
    const [cardImg, setCardImg] = useState(cardBack);
    const cardClick = () => {
        setCardImg(cardFront);
        setRoundScore(roundScore === 0 ? value : roundScore * value);
    }
    return(
        <div className="Card"
        style={{backgroundImage: `url(${cardImg})`}}
        onClick={cardImg === cardBack ? () => cardClick() : undefined } //bruh
        >
        </div>
    );
}

export default Card;
