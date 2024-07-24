import Image from "next/image";
import clsx from "clsx";

import { GameSymbol } from "./GameSymbol";
import { useNow } from "../../lib/timers";

export const PlayerInfo = ({
  mirrored,
  name,
  rating,
  avatar,
  symbol,
  timer,
  timeStartAt,
}) => {
  const now = useNow(1000, timeStartAt);

  const mseconds = Math.max(now ? timer - (now - timeStartAt) : timer, 0);
  const seconds = Math.ceil(mseconds / 1000);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds <= 10;
  const getTimerColor = () => {
    if (timeStartAt) {
      return isDanger ? 'text-orange-600' : 'text-slate-900';
    }
    return 'text-slate-300';
  }
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", mirrored && 'order-3')} >
        <div className="flex items-center gap-2 text-start text-teal-600 w-44">
          <Image src={avatar} alt="avatar" height={48} width={48} />
          <div className="overflow-hidden">
            <div className="text-lg leading-toght truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">Рейтинг: {rating}</div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol className="w-3 h-3" symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", mirrored && 'order-2')} />
      <div className={clsx(
        "text-lg font-semibold w-[60px]",
        mirrored && 'order-1',
        getTimerColor()
      )}>
        {minutesString}:{secondsString}
      </div>
    </div>
  );
};
