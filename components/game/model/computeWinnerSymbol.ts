export const computeWinnerSymbol = (gameState, { winnerSequence, nextMove }) => {
  const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequence?.[0]];
  return winnerSymbol;
};