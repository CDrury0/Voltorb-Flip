import cardTorb from "../Images/voltorb-icon.svg";
import card1 from "../Images/one.svg";
import card2 from "../Images/two.svg";
import card3 from "../Images/three.svg";
import CardRow from "./CardRow";
import CounterRow from "./CounterRow";
import { useState } from "react";

const imgLookup = [cardTorb, card1, card2, card3];

let gridData = [];

const makeGridData = (size, maxScore, setMaxScore, overwrite) => {
    if(!overwrite && gridData.length > 0){
        return;
    }
    const data = [];
    let tempMaxScore = 1;
    for(let i = 0; i < size; i++){
        let temp = [];
        for (let j = 0; j < size; j++){
            const rand = Math.random();
            let pointVal = 0;
            if (rand < 0.45) {
                pointVal = 1;   //45% chance of 1  
            }
            else if (rand < 0.65) {
                pointVal = 2;   //20% chance of 2
            }
            else if (rand < 0.75) {
                pointVal = 3;   //10% chance of 3
            }                   //which leaves 25% chance of torb
            temp.push(pointVal);

            if (pointVal !== 0) {
                tempMaxScore *= pointVal;
            }
        }
        data.push(temp);
    }
    gridData = data;
    setMaxScore(tempMaxScore);
}

const getPointsAndTorbs = (setOfCards) => {
    const rowPoints = setOfCards.reduce((start, i) => start + i);
    const rowTorbs = setOfCards.reduce((start, i) => start + !i, 0);
    return [rowPoints, rowTorbs];
}

const Grid = (props) => {
    const [maxScore, setMaxScore] = useState();
    const [revealFaces, setRevealFaces] = useState(false);
    const gridSize = 5;
    makeGridData(gridSize, maxScore, setMaxScore, false);
    const gridRows = gridData.map((val, index) => {
        const [rowPoints, rowTorbs] = getPointsAndTorbs(gridData[index]);
        return <CardRow key={index} value={val} rowData={gridData[index]} rowPoints={rowPoints} rowTorbs={rowTorbs} imgLookup={imgLookup} roundScore={props.roundScore} setRoundScore={props.setRoundScore} clickState={props.clickState} revealFaces={revealFaces} setRevealFaces={setRevealFaces} maxScore={maxScore}/>
    });
    return (
        <div className="Grid">
            {gridRows}
            <CounterRow gridData={gridData} getPointsAndTorbs={getPointsAndTorbs}/>
        </div>
    );
}

export default Grid;
