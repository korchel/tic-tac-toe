import clsx from 'clsx';
import { GameSymbol } from './GameSymbol';

export const GameCell = ({ symbol, clickCell, isWinner, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={clickCell}
      className={clsx("border bordwer-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
}