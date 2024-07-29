import { IState, Symbols } from "../../../types";

export const getNextMove = (gameState: IState): Symbols => {
  const { currentMove, playersNumber, timers } = gameState;

  const currentOrder = Object.values(Symbols)
    .slice(0, playersNumber)
    .filter((symbol) => timers[symbol] > 0);

  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;
  const nextMove = currentOrder[nextMoveIndex] ?? currentOrder[0];

  return nextMove;
};
