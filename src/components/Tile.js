import { useGameContext } from '../context/GameContext.js';
import './Tile.css';

export default function Tile({ tileContent, index }) {
  const { player, board, setBoard, active } = useGameContext();

  function handleClick() {
    console.log('Wow! Great Click!');
  }

  return (
    <div className="tile" onClick={handleClick}>
      <div>
        {tileContent}
        <p>{index}</p>
      </div>
    </div>
  );
}
