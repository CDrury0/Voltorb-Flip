import Counter from "./Counter";
import Card from "./Card";

const CardRow = (props) => {
    return(
        <div className="CardRow">
            {props.rowData.map((val, index) => {
                return <Card
                    key={index}
                    value={val}
                    cardFront={props.imgLookup[val]}
                    roundScore={props.roundScore}
                    setRoundScore={props.setRoundScore}
                    clickState={props.clickState}
                    revealFaces={props.revealFaces}
                    setRevealFaces={props.setRevealFaces}
                    maxScore={props.maxScore}
                    newBoard={props.newBoard}
                    setTotalScore={props.setTotalScore}
                />
            })}
            <Counter className="RowCounter" points={props.rowPoints} torbs={props.rowTorbs}/>
        </div>
    );
}

export default CardRow;
