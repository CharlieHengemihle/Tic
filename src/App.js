import logo from './logo.svg';
import './App.css';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { board, setBoard, active, setActive, player, setPlayer, message, setMessage } =
    useGameContext();

  return console.log('============', active, message, player);
}

export default App;
