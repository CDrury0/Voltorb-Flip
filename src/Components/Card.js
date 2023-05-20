import { useState } from "react";
import cardBack from "../Images/cardback.png";

const Card = ({value, roundScore, cardFront, setRoundScore}) => {
    const [cardImg, setCardImg] = useState(cardBack);
    const cardClick = () => {
        setCardImg(cardFront);
        setRoundScore(roundScore === 0 ? value : roundScore * value);
        //if value is 0, end game
    }
    return(
        <div className="Card"
        style={{backgroundImage: `url(${cardImg})`}}
        onClick={cardImg === cardBack ? () => cardClick() : undefined } //update to conditionally apply blotter logic if one is selected
        >
        </div>
    );
}

export default Card;
