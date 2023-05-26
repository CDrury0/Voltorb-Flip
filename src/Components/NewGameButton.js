const NewGameButton = (props) => {
    return (
        <button onClick={() => props.setNewBoard(true) }>
            <h1>New Game</h1>
        </button>
    );
}

export default NewGameButton;