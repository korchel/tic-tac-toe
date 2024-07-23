import { SYMBOLS } from "../constants";
import { getNextMove } from "./getNextMove";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: 'cellClick',
};

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index } = action;
      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        currentMove: getNextMove(state.currentMove, state.playersNumber),
        cells: state.cells.map((cell, i) => i === index ? getNextMove(state.currentMove, state.playersNumber) : cell),
      };
    }
    default:
      return state;
  }
};

export const getInitialState = ({ playersNumber }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: SYMBOLS.ZERO,
  playersNumber,
});