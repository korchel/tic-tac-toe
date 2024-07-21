import { MOVE_ORDER } from "../constants";

export const getNextMove = (currentMove, playersNumber, outOfTimePlayers) => {
  const currentOrder = MOVE_ORDER
    .slice(0, playersNumber)
    .filter((symbol) => !outOfTimePlayers?.includes(symbol));
  const nextMoveIndex = currentOrder.indexOf(currentMove) + 1;
  return currentOrder[nextMoveIndex] ?? currentOrder[0];
};

export const computeWinner = (cells, sequenceSize = 5, fieldSize = 19) => {
  const range = Math.floor(sequenceSize / 2);

  const compareElements = (indexes) => {
    let result = true;
    for (let i = 1; i < indexes.length; i += 1) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return result;
  };

  const getSequenceIndexes = (i) => {
    const result = [[], [], [], []];
    for (let j = 0; j < sequenceSize; j += 1) {
      result[0].push(j - range + i);
      result[1].push(j - range + i + (j - range) * fieldSize);
      result[2].push(j - range + i - (j - range) * fieldSize);
      result[3].push(i + (j - range) * fieldSize);
    }
    
    if (i % fieldSize <= range || i % fieldSize >= fieldSize - range) {
      result.shift();
      result.shift();
      result.shift();
    }
  
    return result;
  };

  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find(row => compareElements(row))
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

};