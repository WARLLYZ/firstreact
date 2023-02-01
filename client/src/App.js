
import './App.css';
import { useState } from 'react';
import Header from './Components/header'
import Player from './Components/player'
import Board from './Components/board';
;
function App() {

  let { winner , setWinner} = useState("x");

  setTimeout(( )=> {
      setWinner("O")

  },3000 )
  return (
    <div className="App">
      <Header />
      {/* X */}
      <Player whichPlayer= "x" propOne = {true} propTwo = "HelloWorld" propThree = {77}/>
      {/* O */}
      <Player whichPlayer= "o"/>
      <Board />
     
    </div>
  );
}

export default App;
