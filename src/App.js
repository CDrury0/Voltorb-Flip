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
  return (
    <div className="App">
      <Grid/>
      <SidePanel/>
    </div>
  );
}

export default App;
