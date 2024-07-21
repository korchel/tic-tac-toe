import { GameLayout } from "./ui/GameLayout";
import { HomeLink } from "./ui/HomeLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { players } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";


export const Game = () => {

  return (
    <GameLayout
      homeLink={<HomeLink />}
      gameTitle={<GameTitle />}
      gameInfo={<GameInfo
        isRating
        playersNumber={4}
        timeMode='1 мин. на ход'
      />}
      playersList={
        players.map((player, index) => (
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
    />
  );
};