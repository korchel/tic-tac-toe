export const computeWinnerSymbol = (gameState, { winnerSequnce, nextMove }) => {
  const winnerSymbol = nextMove === gameState.currentMove ? gameState.currentMove : gameState.cells[winnerSequnce?.[0]];
  return winnerSymbol;
};