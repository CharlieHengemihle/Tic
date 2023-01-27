const { createContext, useState, useContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('Big, beautiful Bodacious the Bull');

  return (
    <GameContext.Provider
      value={{ board, setBoard, player, setPlayer, active, setActive, message, setMessage }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('Nope');
  }

  return context;
};

export { GameProvider, useGameContext };
