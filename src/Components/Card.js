import { useState } from "react";
import cardBack from "../Images/cardback.png";
import CardBlotter from "./CardBlotter";

const Card = ({value, roundScore, cardFront, setRoundScore, clickState}) => {
    const [cardImg, setCardImg] = useState(cardBack);
    const [blotters, setBlotters] = useState([]);
    const getClickAction = () => {
        if (clickState === 4) {
            setBlotters([]);
            return cardClick();
        }

        let newBlotters = blotters.slice();
        const indexOfThisBlotter = blotters.indexOf(clickState);
        if (indexOfThisBlotter > -1) {
            newBlotters.splice(indexOfThisBlotter, 1);
        }
        else {
            newBlotters.push(clickState);
        }
        return setBlotters(newBlotters);
    }

    const cardClick = () => {
        setCardImg(cardFront);
        setRoundScore(roundScore === 0 ? value : roundScore * value);
        if (value === 0) {
            //end game
        }
    }

    return(
        <div className="Card"
        style={{backgroundImage: `url(${cardImg})`}}
        onClick={cardImg === cardBack ? () => getClickAction() : undefined }
        >
        {blotters.map((val, index) => {
            return <CardBlotter key={index} value={val} blotterID={"blotter" + val}/>
        })}
        </div>
    );
}

export default Card;
