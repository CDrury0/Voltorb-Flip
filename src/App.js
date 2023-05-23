import { useState } from 'react';
import './App.css';
import Grid from "./Components/Grid.js";
import SidePanel from "./Components/SidePanel.js";

function App() {
  const [roundScore, setRoundScore] = useState(0);
  const [clickState, setClickState] = useState(4);
  //useState for new grid bool
  return (
    <div className="App">
      <Grid roundScore={roundScore} setRoundScore={setRoundScore} clickState={clickState}/>
      <div id="gradient"></div>
      <SidePanel roundScore={roundScore} setClickState={setClickState} clickState={clickState}/>
    </div>
  );
}

export default App;
