import ScoreCounter from "./ScoreCounter";
import BlotterButton from "./BlotterButton";
import NewGameButton from "./NewGameButton";

const SidePanel = (props) => {
    return(
        <div className="SidePanel">
            <div className="subPanel" id="counterSubPanel">
                <h1>Score</h1>
                <ScoreCounter score={props.roundScore}/>
                <h2 id="totalScore">{"Total Score: " + props.totalScore}</h2>
            </div>
            <div className="subPanel">
                <h1>Blotters</h1>
                <div id="buttonRow">
                    <BlotterButton value={0} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={1} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={2} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={3} setClickState={props.setClickState} clickState={props.clickState}/>
                </div>
                <div id="buttonRow">
                    <NewGameButton setNewBoard={props.setNewBoard} setRoundScore={props.setRoundScore} setRevealFaces={props.setRevealFaces} />
                    {/*Below button is bank points*/}
                    <button onClick={() => {
                        if (!props.revealFaces) {
                            props.setRevealFaces(true);
                            props.setTotalScore(props.roundScore);
                        }
                    }}>
                        <h1>Bank Points</h1>
                    </button>
                </div>
            </div>
            <div className="subPanel" id="instructions">
                <h1>- Click a card to reveal its value</h1>
                <h1>- Every card will be 1, 2, 3 or Torb</h1>
                <h1>- Point cards multiply your score by their value</h1>
                <h1>- Torbs explode and end the game immediately</h1>
                <h1>- If you find all 2 and 3 cards, you win</h1>
                <h1>- Use the counters on each row/column to deduce which cards will have which value</h1>
                <h1>- At any time you may bank your points, ending the round but saving your score</h1>
            </div>
            <div className="subPanel" id="credits">
                <h3>Check out my GitHub <a href="https://github.com/cdrury0" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Voltorb SVG <a href="https://seeklogo.com/vector-logo/286585/voltorb" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Score counter font <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" rel="noreferrer">here</a></h3>
                <h3>The game is functional, but I plan to give it a visual overhaul soon</h3>
            </div>
        </div>
    );
}

export default SidePanel;
