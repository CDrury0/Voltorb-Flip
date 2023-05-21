import ScoreCounter from "./ScoreCounter";
import BlotterButton from "./BlotterButton";

const SidePanel = (props) => {
    return(
        <div className="SidePanel">
            <div className="subPanel">
                <ScoreCounter score={props.roundScore}/>
            </div>
            <div className="subPanel">
                <h1>Blotters</h1>
                <div id="blotterButtons">
                    <BlotterButton value={0} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={1} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={2} setClickState={props.setClickState} clickState={props.clickState}/>
                    <BlotterButton value={3} setClickState={props.setClickState} clickState={props.clickState}/>
                </div>
            </div>
            <div className="subPanel">
                {/*menu buttons*/}
            </div>
            <div className="subPanel" id="credits">
                {/* <h3>Check out my GitHub <a href="https://github.com/cdrury0" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Voltorb SVG <a href="https://seeklogo.com/vector-logo/286585/voltorb" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Score counter font <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" rel="noreferrer">here</a></h3> */}
            </div>
        </div>
    );
}

export default SidePanel;
