import { GameLayout } from "./ui/GameLayout";
import { HomeLink } from "./ui/HomeLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { GameCell } from "./ui/GameCell";
import { players } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { getNextMove } from "./model/getNextMove";
import { computeWinner } from "./model/computeWinner";
import { GameOverModal } from "./ui/GameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  getInitialState,
} from "./model/gameStateReducer";
import { useReducer } from "react";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const [ gameState, dispatch] = useReducer(gameStateReducer, { playersNumber: PLAYERS_COUNT }, getInitialState);

  const { cells, currentMove, playersNumber } = gameState;

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState, PLAYERS_COUNT);
  const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove });
  const winner = players.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        homeLink={<HomeLink />}
        gameTitle={<GameTitle />}
        gameInfo={<GameInfo
          isRating
          playersNumber={4}
          timeMode='1 мин. на ход'
        />}
        playersList={
          players.slice(0, PLAYERS_COUNT).map((player, index) => (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              countDown={60}
              symbol={player.symbol}
              mirrored={index % 2 === 1}
            />
          ))
        }
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove}/>}
        gameCells={
          cells.map((cell, index) => (
            <GameCell
              key={index}
              clickCell={() => { dispatch({type: GAME_STATE_ACTIONS.CELL_CLICK, index}) }}
              isWinner={winnerSequence?.includes(index)}
              disabled={!!winnerSymbol}
              symbol={cell}
            />
          ))
        }
      />
      <GameOverModal
        winnerName={winner?.name}
        playersList={players.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            countDown={60}
            symbol={player.symbol}
            mirrored={index % 2 === 1}
          />
        ))}
      />
    </>
  );
};