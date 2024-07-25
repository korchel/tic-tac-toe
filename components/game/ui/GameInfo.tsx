import { DetailedHTMLProps, HTMLAttributes } from 'react';
import HistoryIcon from './icons/history.svg';
import StarIcon from './icons/star.svg';
import UserIcon from './icons/user.svg';

interface GameInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  playersNumber: number,
  isRating: boolean,
  timeMode: string,
}

export const GameInfo = ({
  playersNumber,
  isRating,
  timeMode
}: GameInfoProps) => {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRating && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon />
        {playersNumber}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
};