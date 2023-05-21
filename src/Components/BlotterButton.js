
const BlotterButton = ({ value, setClickState, clickState }) => {
    const action = () => {
        clickState === value ? setClickState(4) : setClickState(value);
    }
    return (
        <button className="BlotterButton"
            onClick={() => { action() }}
            style={clickState === value ? {backgroundColor: "#01300f"} : {}}
        >
            <h1>{value === 0 ? "Torb" : value}</h1>
        </button>
    );
}

export default BlotterButton;
