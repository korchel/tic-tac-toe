import clsx from 'clsx';
import { Profile } from '../Profile/Profile';
import {GameSymbol} from './GameSymbol';
import { SYMBOLS } from './constants';
import avatar from '../Profile/avatar.png';
import { useEffect, useState } from 'react';
import { useNow } from './hooks/useNow';

const players = [
  { name: "name", rating: 123, symbol: SYMBOLS.ZERO, avatar: avatar, id: 1 },
  { name: "name", rating: 123, symbol: SYMBOLS.CROSS, avatar: avatar, id: 2 },
  { name: "namegggggggggggggg", rating: 123, symbol: SYMBOLS.TRIANGLE, avatar: avatar, id: 3 },
  { name: "name", rating: 123, symbol: SYMBOLS.SQUARE, avatar: avatar, id: 4 },
]

export const GameInfo = ({ className, playersNumber, currentMove }) => {

  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3")}>
      {
        players.slice(0, playersNumber).map((player, index) => (
          <PlayerInfo
            timerOn={currentMove === player.symbol}
            key={player.id}
            info={player}
            mirrored={index % 2 === 1}
          />)
        )
      }
    </div>
  );
};

function PlayerInfo({ info, mirrored, timerOn }) {
  const [startTime, setStartTime] = useState();

  const now = useNow();

  const timePassed = (now - (startTime ?? now) ) / 1000;
  const countDown = Math.max((60 - timePassed), 0);

  const minutes = String(Math.floor(countDown / 60)).padStart(2, "0");
  const seconds = String(Math.floor(countDown % 60)).padStart(2, "0");

  useEffect(() => {
    if (timerOn) {
      setStartTime(Date.now())
    }
    return () => {
      setStartTime();
    };
  }, [timerOn]);

  const isDanger = countDown <= 10;

  const getTimerColor = () => {
    if (timerOn) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-300';
  }
  return (
    <div className="flex gap-3 items-center">
        <div className={clsx("relative", mirrored && 'order-3')} >
          <Profile className="w-44" name={info.name} rating={info.rating} avatar={info.avatar}/>
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <GameSymbol className="w-3 h-3" symbol={info.symbol}/>
          </div>
        </div>
        <div className={clsx("h-6 w-px bg-slate-200", mirrored && 'order-2')}/>
        <div className={clsx(
          "text-lg font-semibold w-[60px]",
          mirrored && 'order-1',
          getTimerColor()
        )}>
            {minutes}:{seconds}
        </div>
      </div>
  )
}
