import { MOVE_ORDER } from "../constants";


export const getNextMove = (gameState) => {
  const { currentMove, playersNumber, timers } = gameState;

  const currentOrder = MOVE_ORDER
    .slice(0, playersNumber)
    .filter((symbol) => timers[symbol] > 0);


  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;

  return currentOrder[nextMoveIndex] ?? currentOrder[0];
};

