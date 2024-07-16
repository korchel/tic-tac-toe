import useGameState from './useGameState';
import GameInfo from './GameInfo';
import GameCell from './GameCell';
import ResetButton from './resetButton';

const Game = () => {
  const { cells, currentStep, winnerSymbol, isDraw, toggleCell, resetGame, getWinnerCell } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border border-black p-5">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton resetGame={resetGame} />
    </div>
  );
};

export default Game;