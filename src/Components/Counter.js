
const Counter = (props) => {
    return(
        <div className="Counter">
            <h1>{props.points} Points</h1>
            <h1>{props.torbs + (props.torbs === 1 ? " Torb" : " Torbs")}</h1>
        </div>
    );
}

export default Counter;