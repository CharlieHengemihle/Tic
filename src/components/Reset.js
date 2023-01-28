import { useGameContext } from '../context/GameContext.js';

export default function Reset() {
  const { setMessage, setBoard, setCatsGame, setActive, board } = useGameContext();

  function handleClick() {
    setActive(true);
    setBoard(board.fill(''));
    setCatsGame(false);
    setMessage('GETTEM!');
  }
  return <button onClick={handleClick}>Reset Game</button>;
}
