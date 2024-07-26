import { GameStateAction, GameStateActionType, IState, Symbols, TimersType } from "../../../types";

import { getNextMove } from "./getNextMove";

export const gameStateReducer = (state: IState, action: GameStateAction) => {
  const { index, now } = action;

  switch (action.type) {
    case GameStateActionType.CELL_CLICK: {

      if (state.cells[index as number]) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        cells: updateCells(state, index as number),
        currentMoveSatrt: now,
      };
    }
    case GameStateActionType.TICK: {
      if (!getTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveSatrt: now,
      };
    }
    default:
      return state;
  }
};

export const getInitialState = ({ playersNumber, defaultTimer }: {playersNumber: number, defaultTimer: number}): IState => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: Symbols.Zero,
  currentMoveStart: Date.now(),
  playersNumber,
  timers: Object.values(Symbols).reduce((timers, symbol, index) => {
    if (index < playersNumber) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {} as TimersType),
});

function updateTimers(gameState: IState, now: number) {
  const diff = now - gameState.currentMoveStart;

  const timer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
   [gameState.currentMove]: timer - diff,
  };
}

function updateCells(gameState: IState, index: number) {
  return  gameState.cells.map((cell, i) => i === index ? getNextMove(gameState) : cell)
}

function getTimeOver(gameState: IState, now: number) {
  const { currentMove } = gameState;
  const currentTimer = updateTimers(gameState, now)[currentMove];
  return currentTimer <= 0;
}