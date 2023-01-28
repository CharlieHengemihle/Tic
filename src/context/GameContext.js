const { createContext, useState, useContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('Snake');
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('GETTEM!');
  const [catsGame, setCatsGame] = useState(false);

  const checkWinner = () => {
    let winner = '';
    if (board[0] === board[1] && board[1] === board[2]) {
      winner = board[0];
    }
    if (board[0] === board[3] && board[3] === board[6]) {
      winner = board[0];
    }
    if (board[0] === board[4] && board[4] === board[8]) {
      winner = board[0];
    }
    if (board[3] === board[4] && board[4] === board[5]) {
      winner = board[3];
    }
    if (board[1] === board[4] && board[4] === board[7]) {
      winner = board[7];
    }
    if (board[2] === board[4] && board[4] === board[6]) {
      winner = board[6];
    }
    if (board[2] === board[5] && board[5] === board[8]) {
      winner = board[2];
    }
    if (board[6] === board[7] && board[7] === board[8]) {
      winner = board[6];
    }
    return winner;
  };

  const checkGameStatus = () => {
    if (!active) return;
    if (!board.includes('')) {
      setCatsGame(true);
      setMessage('Cats Win, Losers!');
      setActive(false);
    }
    const winner = checkWinner();
    if (winner) {
      setMessage(`You gottem ${winner}`);
      setActive(false);
    }
  };

  checkGameStatus();

  return (
    <GameContext.Provider
      value={{
        catsGame,
        setCatsGame,
        board,
        setBoard,
        player,
        setPlayer,
        active,
        setActive,
        message,
        setMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// function checkWinner({ board, setCatsGame, setMessage }) {
//   if (board[0] === board[1] && board[1] === board[2]) {
//     return board[0];
//   }
//   if (board[0] === board[3] && board[3] === board[6]) {
//     return board[0];
//   }
//   if (board[0] === board[4] && board[4] === board[8]) {
//     return board[0];
//   }
//   if (board[3] === board[4] && board[4] === board[5]) {
//     return board[3];
//   }
//   if (board[1] === board[4] && board[4] === board[7]) {
//     return board[7];
//   }
//   if (board[2] === board[4] && board[4] === board[6]) {
//     return board[6];
//   }
//   if (board[2] === board[5] && board[5] === board[8]) {
//     return board[2];
//   }
//   if (board[6] === board[7] && board[7] === board[8]) {
//     return board[6];
//   }
//   if (board.includes('')) {
//     setCatsGame(false);
//   } else {
//     setCatsGame(true);
//     setMessage('Cats Win, Losers!');
//   }
// }

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('Nope');
  }

  return context;
};

export { GameProvider, useGameContext };
