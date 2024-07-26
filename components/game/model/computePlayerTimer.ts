import { IState, Symbols } from "../../../types";

export const computePlayerTimer = (gameState: IState, playerSymbol: Symbols) => {
  const { timers, currentMove, currentMoveStart } = gameState;

  return {
    timer: timers[playerSymbol],
    timeStartAt:
      playerSymbol === currentMove
      ? currentMoveStart
      : undefined,
  };
};