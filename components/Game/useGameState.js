import { useState } from "react";
import { MOVE_ORDER, SYMBOLS } from "./constants";

// const computeWinner = (cells) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (
//       cells[a] &&
//       cells[a] === cells[b] &&
//       cells[a] === cells[c]
//     ) {
//       return [a, b, c]
//     }
//   }
// };

const getNextMove = (currentMove, playersNumber) => {
  const currentOrder = MOVE_ORDER.slice(0, playersNumber);
  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;
  return currentOrder[nextMoveIndex] ?? currentOrder[0];
};

export const useGameState = (playersNumber) => {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: SYMBOLS.ZERO,
  }));

  const nextMove = getNextMove(currentMove, playersNumber);

  const handleClickCell = (index) => {
    setGameState((prevState) => {
      if (prevState.cells[index]) {
        return prevState;
      }
      return {
        ...prevState,
        currentMove: getNextMove(prevState.currentMove, playersNumber),
        cells: prevState.cells.map((cell, i) => i === index ? getNextMove(prevState.currentMove, playersNumber) : cell),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove, 
    handleClickCell,
  };
};
