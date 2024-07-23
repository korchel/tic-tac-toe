import { MOVE_ORDER } from "../constants";


export const getNextMove = (gameState) => {
  const { currentMove, playersNumber } = gameState;

  const currentOrder = MOVE_ORDER
    .slice(0, playersNumber)


  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;

  return currentOrder[nextMoveIndex] ?? currentOrder[0];
};
