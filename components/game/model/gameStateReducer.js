import { MOVE_ORDER, SYMBOLS } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cellClick',
  TICK: 'tick',
};

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveSatrt: now,
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;
      if (getTimeOver(state, now)) {
        return state;
      }
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveSatrt: now,
        cells: updateCells(state, index),
      };
    }
    default:
      return state;
  }
};

export const getInitialState = ({ playersNumber, defaultTimer }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: SYMBOLS.ZERO,
  currentMoveSatrt: Date.now(),
  playersNumber,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersNumber) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveSatrt;

  const timer = gameState.timers[gameState.currentMove];
  return {
    ...gameState.timers,
   [gameState.currentMove]: timer - diff,
  };
}

function updateCells(gameState, index) {
  return  gameState.cells.map((cell, i) => i === index ? getNextMove(gameState) : cell)
}

function getTimeOver(gameState, now) {
  const { currentMove } = gameState;
  const currentTimer = updateTimers(gameState, now)[currentMove];
  return currentTimer <= 0;
}