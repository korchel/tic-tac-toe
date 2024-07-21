import { useState } from "react";

import { SYMBOLS } from "../constants";
import { getNextMove, computeWinner } from "../model/model";


export const useGameState = (playersNumber) => {
  const [{ cells, currentMove, outOfTimePlayers }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: SYMBOLS.ZERO,
    outOfTimePlayers: [],
  }));
  const winnerSequnce = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersNumber, outOfTimePlayers);
  
  const winnerSymbol = nextMove === currentMove ? currentMove : cells[winnerSequnce?.[0]];

  const handleClickCell = (index) => {
    setGameState((prevState) => {
      if (prevState.cells[index]) {
        return prevState;
      }
      return {
        ...prevState,
        currentMove: getNextMove(prevState.currentMove, playersNumber),
        cells: prevState.cells.map((cell, i) => i === index ? getNextMove(prevState.currentMove, playersNumber, outOfTimePlayers) : cell),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prevState) => ({
      ...prevState,
      outOfTimePlayers: [...prevState.outOfTimePlayers, symbol],
      currentMove: getNextMove(prevState.currentMove, playersNumber, outOfTimePlayers)
    }));
  };

  return {
    cells,
    currentMove,
    nextMove, 
    handleClickCell,
    winnerSequnce,
    handlePlayerTimeOver,
    winnerSymbol
  };
};
