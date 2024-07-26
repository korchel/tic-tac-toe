import { StaticImageData } from "next/image";

export enum Symbols {
  Zero = 'zero',
  Cross = 'cross',
  Triangle = 'triangle',
  Square = 'square',
}

export interface IPlayer {
  name: string,
  rating: number, 
  symbol: Symbols,
  avatar: StaticImageData,
  id: number,
}

export type MoveOrder = [Symbols.Zero, Symbols.Cross, Symbols.Triangle, Symbols.Square];

export enum GameStateActionType {
  CELL_CLICK = 'cellClick',
  TICK = 'tick',
}

export interface GameStateAction {
  type: GameStateActionType,
  now: number,
  index?: number,
}

export type TimersType = Record<Symbols, number>;

export interface IState {
  timers: TimersType,
  cells: Array<null | Symbols>,
  currentMove: Symbols,
  currentMoveStart: number,
  playersNumber: number,
}