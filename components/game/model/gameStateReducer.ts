import { GameStateAction, GameStateActionType, IState, Symbols, TimersType } from "../../../types";

import { getNextMove } from "./getNextMove";

export const gameStateReducer = (state: IState, action: GameStateAction) => {

  switch (action.type) {
    case GameStateActionType.CELL_CLICK: {
      const { index, now } = action;

      if (state.cells[index as number]) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        cells: updateCells(state, index as number),
        currentMoveStart: now,
      };
    }
    case GameStateActionType.TICK: {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
      };
    }
    default:
      return state;
  }
};

export const getInitialState = ({ playersNumber, defaultTimer, currentMoveStart }: {playersNumber: number, defaultTimer: number, currentMoveStart: number}): IState => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: Symbols.Zero,
  currentMoveStart,
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

  const currentTimer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
   [gameState.currentMove]: currentTimer - diff,
  };
}

function updateCells(gameState: IState, index: number) {
  return  gameState.cells.map((cell, i) => i === index ? getNextMove(gameState) : cell)
}

function isTimeOver(gameState: IState, now: number) {
  const { currentMove } = gameState;
  const currentTimer = updateTimers(gameState, now)[currentMove];
  return currentTimer <= 0;
}