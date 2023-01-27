import { useGameContext } from '../context/GameContext.js';
import './Tile.css';
// import horse from '../../public/horse.png';
// import snake from '../../public/snake.png';
export default function Tile({ tileContent, index }) {
  const { player, setPlayer, board, active, setBoard } = useGameContext();

  function handleClick() {
    if (tileContent === 'Snake') {
      return;
    }
    if (tileContent === 'Horse') {
      return;
    }
    if (!active) {
      return;
    } else {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      //   board[index] = player;
      if (player === 'Snake') {
        setPlayer('Horse');
      } else {
        setPlayer('Snake');
      }
    }
    // return board;
  }

  return (
    <div className={'tile'} onClick={handleClick}>
      <section className={`${tileContent}`}>
        {/* <img className="hidden" src={`../../${tileContent}.png`} onClick={remove class='hidden'}/> */}
        <p>{tileContent}</p>
      </section>
    </div>
  );
}
