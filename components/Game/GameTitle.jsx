import Link from "next/link";
import ArrowLeftIcon from "./icons/arrowLeft.svg";
import HistoryIcon from './icons/history.svg';
import StarIcon from './icons/star.svg';
import UserIcon from './icons/user.svg';

export const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
        <ArrowLeftIcon />
        На главную
      </Link>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          2
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />
          1 мин на ход
        </div>      
      </div>
    </div>
  );
};