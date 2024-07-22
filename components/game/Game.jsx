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
import { useGameState } from "./model/useGameState";
import { GameOverModal } from "./ui/GameOverModal";

const PLAYERS_COUNT = 2;

export const Game = () => {
  const {
    cells,
    currentMove,
    nextMove, 
    handleClickCell,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol
  } = useGameState(PLAYERS_COUNT);

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
              clickCell={() => { handleClickCell(index) }}
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