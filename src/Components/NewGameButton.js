const NewGameButton = (props) => {
    return (
        <button onClick={() => {
            props.setNewBoard(true);
            props.setRevealFaces(false);
            props.setRoundScore(0);
        }}>
            <h1>New Game</h1>
        </button>
    );
}

export default NewGameButton;