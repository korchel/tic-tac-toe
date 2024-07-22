import avatar from './ui/images/avatar.png';

export const SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [SYMBOLS.ZERO, SYMBOLS.CROSS, SYMBOLS.TRIANGLE, SYMBOLS.SQUARE];

export const players = [
  { name: "name", rating: 123, symbol: SYMBOLS.ZERO, avatar: avatar, id: 1 },
  { name: "!!!", rating: 123, symbol: SYMBOLS.CROSS, avatar: avatar, id: 2 },
  { name: "namegggggggggggggg", rating: 123, symbol: SYMBOLS.TRIANGLE, avatar: avatar, id: 3 },
  { name: "name", rating: 123, symbol: SYMBOLS.SQUARE, avatar: avatar, id: 4 },
];