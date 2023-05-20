
const CardBlotter = (props) => {
    const isTorb = props.value === 0;
    const style = {backgroundColor: isTorb ? "rgba(200,0,0,0.5)" : "rgba(110,108,105,0.5)"}
    return (
        <div className="CardBlotter" id={props.blotterID} style={style}>
            <h1>{!isTorb ? props.value : ""}</h1>
        </div>  
    );
}

export default CardBlotter;