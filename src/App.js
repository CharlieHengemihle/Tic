// import logo from './logo.svg';
import './App.css';
import { useGameContext } from './context/GameContext.js';
import Board from './components/Board.js';
import Reset from './components/Reset.js';
// import Message from './components/Message.js';

function App() {
  const { message } = useGameContext();

  return (
    <div className="App">
      <>
        <h1>Snake Horse!</h1>
        <span>{message}</span>
        <Board />
        <Reset />
      </>
    </div>
  );
}

export default App;
