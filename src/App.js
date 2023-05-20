import { useState } from 'react';
import './App.css';
import Grid from "./Components/Grid.js";
import SidePanel from "./Components/SidePanel.js";

/* 
function torbFlipAction () {}
function pointFlipAction () {}
const actions = [torbFlipAction, pointFlipAction];

LOOKUP USING:
actions[!!valueOfCard]

large
*/

function App() {
  const [roundScore, setRoundScore] = useState(0);
  const [clickState, setClickState] = useState(1);
  return (
    <div className="App">
      <Grid roundScore={roundScore} setRoundScore={setRoundScore} clickState={clickState}/>
      <div id="gradient"></div>
      <SidePanel roundScore={roundScore} setClickState={setClickState}/>
    </div>
  );
}

export default App;
