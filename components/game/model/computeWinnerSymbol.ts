import { IState, Symbols } from "../../../types";

export const computeWinnerSymbol = (gameState: IState, { winnerSequence, nextMove }: {winnerSequence: number[] | undefined, nextMove: Symbols}): Symbols | undefined => {
  if (nextMove === gameState.currentMove) {
    return gameState.currentMove;
  }
  if (winnerSequence) {
    gameState.cells[winnerSequence[0]];
  }
};