import { useState } from 'react';
import './App.css';
import Grid from "./Components/Grid.js";
import SidePanel from "./Components/SidePanel.js";

function App() {
    const [roundScore, setRoundScore] = useState(0);
    const [clickState, setClickState] = useState(4);
    const [newBoard, setNewBoard] = useState(false);
    return (
        <div className="App">
            <Grid roundScore={roundScore} setRoundScore={setRoundScore} clickState={clickState} newBoard={newBoard} setNewBoard={setNewBoard} />
            <div id="gradient"></div>
            <SidePanel roundScore={roundScore} setClickState={setClickState} clickState={clickState} setNewBoard={setNewBoard}/>
        </div>
    );
}

export default App;
