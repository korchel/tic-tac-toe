import { MOVE_ORDER } from "../constants";


export const getNextMove = (gameState, playersNumber, outOfTimePlayers) => {
  const { currentMove } = gameState;

  const currentOrder = MOVE_ORDER
    .slice(0, playersNumber)
    .filter((symbol) => !outOfTimePlayers?.includes(symbol));
  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;

  return currentOrder[nextMoveIndex] ?? currentOrder[0];
};
