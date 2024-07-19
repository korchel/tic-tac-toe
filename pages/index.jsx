import { GameTitle, GameInfo, GameField, useGameState } from "../components/Game";
import { Header } from "../components/Header";
import { useState } from "react";

const HomePage = () => {
  const [playersNumber] = useState(2);
  const { cells, nextMove, currentMove, handleClickCell } = useGameState(playersNumber);

  return (
    <div className="bg-slate-50 min-h-screen leading-tight -mb-0.5">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersNumber={playersNumber} />
        <GameInfo
          playersNumber={playersNumber}
          currentMove={currentMove}
          className="mt-4"
        />
        <GameField
          cells={cells}
          nextMove={nextMove}
          currentMove={currentMove}
          handleClickCell={handleClickCell}
          className="mt-6"
        />
      </main>
    </div>
  );
};

export default HomePage;