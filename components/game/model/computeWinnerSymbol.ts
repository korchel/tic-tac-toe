import { IState, Symbols } from "../../../types";


export const computeWinnerSymbol = (
  gameState: IState,
  { winnerSequence, nextMove }: { winnerSequence: number[] | undefined, nextMove: Symbols }): Symbols | undefined | null => {

  if (nextMove === gameState.currentMove) {
    return gameState.currentMove;
  }
  if (winnerSequence) {
    return gameState.cells[winnerSequence[0]];
  }
};