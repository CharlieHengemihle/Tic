import { useGameContext } from '../context/GameContext.js';
import Tile from './Tile.js';
import './Board.css';

export default function Board() {
  const { board } = useGameContext();

  return (
    <div className="board">
      {board.map((tileContent, index) => (
        <Tile key={index} {...{ tileContent }} {...{ index }} />
      ))}
    </div>
  );
}
