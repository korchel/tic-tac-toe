import Link from "next/link";
import ArrowLeftIcon from "./icons/arrowLeft.svg";
import HistoryIcon from './icons/history.svg';
import StarIcon from './icons/star.svg';
import UserIcon from './icons/user.svg';

export const GameTitle = ({ playersNumber }) => {
  return (
    <div className="pl-2">
      <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          {playersNumber}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />
          1 мин на ход
        </div>      
      </div>
    </div>
  );
};