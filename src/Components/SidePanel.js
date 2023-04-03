import ScoreCounter from "./ScoreCounter";

const SidePanel = (props) => {
    return(
        <div className="SidePanel">
            <div className="subPanel">
                <ScoreCounter score={props.roundScore}/>
            </div>
            <div className="subPanel">
                {/*blotter buttons*/}
            </div>
            <div className="subPanel">
                {/*menu buttons*/}
            </div>
            <div className="subPanel" id="credits">
                <h3>Check out my GitHub <a href="https://github.com/cdrury0" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Voltorb SVG <a href="https://seeklogo.com/vector-logo/286585/voltorb" target="_blank" rel="noreferrer">here</a></h3>
                <h3>Score counter font <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank" rel="noreferrer">here</a></h3>
            </div>
        </div>
    );
}

export default SidePanel;
