import { useEffect, useState } from "react";
import cardBack from "../Images/cardback.png";
import CardBlotter from "./CardBlotter";

const Card = ({value, roundScore, cardFront, setRoundScore, clickState, revealFaces, setRevealFaces, maxScore, newBoard}) => {
    const [cardImg, setCardImg] = useState(cardBack);
    const [blotters, setBlotters] = useState([]);
    const getClickAction = () => {
        //0-3 correspond to possible point values, 4 means no blotter selected
        if (clickState === 4) {
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
        setBlotters([]);
        setCardImg(cardFront);
        setRoundScore(roundScore === 0 ? value : roundScore * value);
        if (value === 0) {
            setRevealFaces(true);
        }
        //since the new value of roundScore is not available until after a re-render, doing the multiplication operation here reliably yields the same result
        else if (roundScore * value === maxScore) {
            setRevealFaces(true);
            //add roundScore to totalScore
        }
    }

    useEffect(() => {
        if (revealFaces && cardImg === cardBack) {
            setBlotters([]);
            setCardImg(cardFront);
        }
        if (newBoard) {
            setBlotters([]);
            setCardImg(cardBack);
        }
    }, [revealFaces, newBoard]);
    

    return(
        <div className="Card"
        style={{backgroundImage: `url(${cardImg})`}}
        onClick={cardImg === cardBack ? () => getClickAction() : null}
        >
        {blotters.map((val, index) => {
            return <CardBlotter key={index} value={val} blotterID={"blotter" + val}/>
        })}
        </div>
    );
}

export default Card;
