import cardTorb from "../Images/cardvoltorb.png";
import card1 from "../Images/card1.png";
import card2 from "../Images/card2.png";
import card3 from "../Images/card3.png";
import Card from "./Card";
import Counter from "./Counter";

const makeGridData = (size) => {
    const data = [];
    for(let i = 0; i < size; i++){
        let temp = [];
        for(let j = 0; j < size; j++){
            temp.push(Math.floor(Math.random() * 3.5)); //3.5 weights the result away from 0, resulting in fewer torbs
        }
        data.push(temp);
    }
    console.log(data);
    return data;
}

const getPointsAndTorbs = (setOfCards) => {
    const rowPoints = setOfCards.reduce((start, i) => start + i);
    const rowTorbs = setOfCards.reduce((start, i) => start + !i, 0);
    return [rowPoints, rowTorbs];
}

const CardRow = (props) => {
    const cards = props.rowData.map((val, index) => <Card key={index} value={val} cardData={cardDataObjects.find(obj => obj.pointValue === props.rowData[index])}/>);
    const [rowPoints, rowTorbs] = getPointsAndTorbs(props.rowData);
    return(
        <div className="CardRow">
            {cards}
            <Counter points={rowPoints} torbs={rowTorbs}/>
        </div>
    );
}

const CounterRow = (props) => {
    let counters = [];
    for(let i = 0; i < props.gridData.length; i++){
        let column = [];
        for(let j = 0; j < props.gridData.length; j++){
            column.push(props.gridData[j][i]);
        }
        const [points, torbs] = getPointsAndTorbs(column);
        counters.push(<Counter key={i} points={points} torbs={torbs}/>);
    }
    return(
        <div className="CardRow">
            {counters}
            <div className="dummy"></div>
        </div>
    );
} 

const Grid = () => {
    const gridSize = 5;
    const gridData = makeGridData(gridSize);
    const gridRows = gridData.map((val, index) => <CardRow key={index} value={val} rowData={gridData[index]}/>);
    return (
        <div className="Grid">
            {gridRows}
            <CounterRow gridData={gridData}/>
        </div>
    );
}

const torbObj = {
    pointValue: 0,
    cardFront: cardTorb,
    flipAction: "" //add function for when card is flipped
};

const cardObj1 = {
    pointValue: 1,
    cardFront: card1,
    flipAction: "" //add function for when card is flipped
};

const cardObj2 = {
    pointValue: 2,
    cardFront: card2,
    flipAction: "" //add function for when card is flipped
};

const cardObj3 = {
    pointValue: 3,
    cardFront: card3,
    flipAction: "" //add function for when card is flipped
};

const cardDataObjects = [torbObj, cardObj1, cardObj2, cardObj3];

export default Grid;
