
const Counter = (props) => {
    return(
        <div className="Counter">
            <h1>{props.points} Points</h1>
            <h1>{props.torbs} x</h1>
        </div>
    );
}

export default Counter;