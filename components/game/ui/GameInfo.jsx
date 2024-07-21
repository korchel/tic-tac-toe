import HistoryIcon from './icons/history.svg';
import StarIcon from './icons/star.svg';
import UserIcon from './icons/user.svg';

export const GameInfo = ({
  playersNumber,
  isRating,
  timeMode
}) => {
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