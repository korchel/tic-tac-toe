import { useState } from "react";
import clsx from "clsx";

import { ButtonComponent } from "../uikit/ButtonComponent";
import { SYMBOLS, MOVE_ORDER } from './constants';
import {GameSymbol} from "./GameSymbol";

const getNextMove = (currentMove) => {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
};

export const GameField = ({ className }) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleClickCell = (index) => {
    setGameState((prevState) => ({
      ...prevState,
      currentMove: getNextMove(prevState.currentMove),
      cells: prevState.cells.map((cell, i) => i === index ? getNextMove(prevState.currentMove) : cell),
    }));
  };

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo currentMove={currentMove} nextMove={nextMove} actions={
        <>
          <ButtonComponent variant="primary" size="md">Ничья</ButtonComponent>
          <ButtonComponent variant="outline" size="md">Сдаться</ButtonComponent>
        </>
        }
      />
      <GameGrid>
        {cells.map((symbol, i) => (
          <GameCell key={i} clickCell={() => { handleClickCell(i) }}>
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};

function GameFieldLayout({ children, className }) {
  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md pt-5 pb-7 px-8')}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight semibold">
          Ход: <GameSymbol className="w-5 h-5" symbol={currentMove} />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol className="w-3 h-3" symbol={nextMove} />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-3">
      {children}
    </div>
  );
}

function GameCell({ children, clickCell }) {
  return (
    <button onClick={clickCell} className="border bordwer-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}