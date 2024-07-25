export const computePlayerTimer = (gameState, playerSymbol) => {
  const { timers, currentMove, currentMoveSatrt } = gameState;

  return {
    timer: timers[playerSymbol],
    timeStartAt:
      playerSymbol === currentMove
      ? currentMoveSatrt
      : undefined,
  };
};