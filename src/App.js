import logo from './logo.svg';
import './App.css';
import { useGameContext } from './context/GameContext.js';
import Board from './components/Board.js';

function App() {
  const { board, setBoard, active, setActive, player, setPlayer, message, setMessage } =
    useGameContext();

  return (
    <div className="App">
      <section>
        <h1>Snake Horse!</h1>
        <p> It&apos;s the {player}s turn </p>
        <Board />
      </section>
    </div>
  );
}

export default App;
