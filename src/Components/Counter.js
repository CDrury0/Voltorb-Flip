
const Counter = (props) => {
    return(
        <div className="Counter">
            <h1>{props.points}</h1>
            <h1>{props.torbs} x</h1>
        </div>
    );
}

export default Counter;