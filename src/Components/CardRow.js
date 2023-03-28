import Counter from "./Counter";
import Card from "./Card";

const CardRow = (props) => {
    return(
        <div className="CardRow">
            {props.rowData.map((val, index) => {
                return <Card key={index} value={val} cardFront={props.imgLookup[val]}/>
            })}
            <Counter className="RowCounter" points={props.rowPoints} torbs={props.rowTorbs}/>
        </div>
    );
}

export default CardRow;
