import { useGameContext } from '../context/GameContext.js';
import './Tile.css';

export default function Tile({ tileContent }) {
  const { player, board, setBoard, active } = useGameContext();

  return (
    <div className="tile">
      <div>{tileContent}</div>
    </div>
  );
}
