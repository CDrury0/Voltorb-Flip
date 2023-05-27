import { useState } from 'react';
import './App.css';
import Grid from "./Components/Grid.js";
import SidePanel from "./Components/SidePanel.js";

function App() {
    const scoreCookieKey = "score=";
    const [totalScore, setTotalScore] = useState(!!document.cookie ? parseInt(document.cookie.slice(scoreCookieKey.length)) : 0);
    const [roundScore, setRoundScore] = useState(0);
    const [clickState, setClickState] = useState(4);
    const [revealFaces, setRevealFaces] = useState(false);
    const [newBoard, setNewBoard] = useState(false);
    const passedSetTotalScore = (newScore) => {
        setTotalScore(totalScore + newScore);
        document.cookie = (scoreCookieKey + (totalScore + newScore) + ";");
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

export default App;
