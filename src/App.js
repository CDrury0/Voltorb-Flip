import { useState } from 'react';
import './App.css';
import Grid from "./Components/Grid.js";
import SidePanel from "./Components/SidePanel.js";

function App() {
    window.onresize();
    const storedScore = localStorage.getItem("score");
    const [totalScore, setTotalScore] = useState(!!storedScore ? parseInt(storedScore) : 0);
    const [roundScore, setRoundScore] = useState(0);
    const [clickState, setClickState] = useState(4);
    const [revealFaces, setRevealFaces] = useState(false);
    const [newBoard, setNewBoard] = useState(false);
    const passedSetTotalScore = (newScore) => {
        setTotalScore(totalScore + newScore);
        localStorage.setItem("score", (totalScore + newScore));
    }
    return (
        <div className="App">
            <Grid roundScore={roundScore}
                setRoundScore={setRoundScore}
                clickState={clickState}
                newBoard={newBoard}
                setNewBoard={setNewBoard}
                revealFaces={revealFaces}
                setRevealFaces={setRevealFaces}
                setTotalScore={passedSetTotalScore}
            />
            <div id="gradient"></div>
            <SidePanel
                roundScore={roundScore}
                setClickState={setClickState}
                clickState={clickState}
                setNewBoard={setNewBoard}
                setRoundScore={setRoundScore}
                totalScore={totalScore}
                setTotalScore={passedSetTotalScore}
                revealFaces={revealFaces}
                setRevealFaces={setRevealFaces}
            />
        </div>
    );
}

window.onresize = () => {
    const rootElement = document.querySelector(":root");
    const useHorizontal = window.innerWidth > window.innerHeight * 1.2;
    rootElement.className = useHorizontal ? "horizontal" : "vertical";
    console.log(rootElement.className);
};

export default App;
