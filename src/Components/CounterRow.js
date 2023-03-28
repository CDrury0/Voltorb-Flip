import Counter from "./Counter";

const CounterRow = (props) => {
    let counters = [];
    for(let i = 0; i < props.gridData.length; i++){
        let column = [];
        for(let j = 0; j < props.gridData.length; j++){
            column.push(props.gridData[j][i]);
        }
        const [points, torbs] = props.getPointsAndTorbs(column);
        counters.push(<Counter key={i} points={points} torbs={torbs}/>);
    } 

    return(
        <div className="CardRow" id="CounterRow">
            {counters}
            <div className="dummy"/>
        </div>
    );
}

export default CounterRow;
