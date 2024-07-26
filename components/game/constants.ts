import { IPlayer, Symbols } from '../../types';
import avatar from './ui/images/avatar.png';

export const SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
  TRIANGLE: 'triangle',
  SQUARE: 'square',
};

export const MOVE_ORDER = [SYMBOLS.ZERO, SYMBOLS.CROSS, SYMBOLS.TRIANGLE, SYMBOLS.SQUARE];

export const players: IPlayer[] = [
  { name: "name", rating: 123, symbol: Symbols.Zero, avatar: avatar, id: 1 },
  { name: "!!!", rating: 123, symbol: Symbols.Cross, avatar: avatar, id: 2 },
  { name: "namegggggggggggggg", rating: 123, symbol: Symbols.Triangle, avatar: avatar, id: 3 },
  { name: "name", rating: 123, symbol: Symbols.Square, avatar: avatar, id: 4 },
];