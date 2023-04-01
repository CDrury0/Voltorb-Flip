import ScoreCounter from "./ScoreCounter";

const SidePanel = (props) => {
    return(
        <div className="SidePanel">
            <ScoreCounter score={props.roundScore}/>
        </div>
    );
}

export default SidePanel;
