import { GameLayout } from "./ui/GameLayout";
import { HomeLink } from "./ui/HomeLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { GameCell } from "./ui/GameCell";
import { players } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { getNextMove } from "./model/getNextMove";
import { computeWinnerSequence } from "./model/computeWinnerSequence";
import { GameOverModal } from "./ui/GameOverModal";
import {
  gameStateReducer,
  getInitialState,
} from "./model/gameStateReducer";
import { useReducer } from "react";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { computePlayerTimer } from "./model/computePlayerTimer";
import { useInterval } from "../lib/timers";
import { ButtonComponent } from "../uikit/ButtonComponent";
import { GameStateActionType } from "../../types";

const PLAYERS_COUNT = 3;

export const Game = () => {
  const [gameState, dispatch] = useReducer(gameStateReducer, {
    playersNumber: PLAYERS_COUNT,
    defaultTimer: 60000,
    currentMoveStart: Date.now(),
  }, getInitialState);

  const { cells, currentMove, currentMoveStart } = gameState;
  console.log('render')

  useInterval(100, !!currentMoveStart, () => {
    dispatch({
      type: GameStateActionType.TICK,
      now: Date.now(),
    });
  });

  const winnerSequence = computeWinnerSequence(gameState);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, { winnerSequence, nextMove });
  const winner = players.find((player) => player.symbol === winnerSymbol);

  return (
    <>
      <GameLayout
        homeLink={<HomeLink />}
        gameTitle={<GameTitle />}
        gameInfo={<GameInfo
          isRating
          playersNumber={PLAYERS_COUNT}
          timeMode='1 мин. на ход'
        />}
        playersList={
          players.slice(0, PLAYERS_COUNT).map((player, index) => {
            const { timer, timeStartAt } = computePlayerTimer(gameState, player.symbol);
            return (
              <PlayerInfo
                key={player.id}
                avatar={player.avatar}
                name={player.name}
                rating={player.rating}
                timer={timer}
                timeStartAt={timeStartAt}
                symbol={player.symbol}
                mirrored={index % 2 === 1}
              />
            );
          })
        }
        gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove}/>}
        gameCells={
          cells.map((cell, index) => (
            <GameCell
              key={index}
              clickCell={() => { dispatch({type: GameStateActionType.CELL_CLICK, index, now: Date.now() }) }}
              isWinner={winnerSequence?.includes(index)}
              disabled={!!winnerSymbol}
              symbol={cell}
            />
          ))
        }
        actions={<ButtonComponent size="md" variant="primary"/>}
      />
      <GameOverModal
        winnerName={winner?.name}
        playersList={players.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timeStartAt } = computePlayerTimer(gameState, player.symbol);
          return (
            <PlayerInfo
              timer={timer}
              timeStartAt={timeStartAt}
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              symbol={player.symbol}
              mirrored={index % 2 === 1}
            />
          );
        })}
      />
    </>
  );
};