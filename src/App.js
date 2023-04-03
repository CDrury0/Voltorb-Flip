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
  return (
    <div className="App">
      <Grid roundScore={roundScore} setRoundScore={setRoundScore}/>
      <div id="gradient"></div>
      <SidePanel roundScore={roundScore}/>
    </div>
  );
}

export default App;
