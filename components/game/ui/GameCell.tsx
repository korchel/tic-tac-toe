import clsx from 'clsx';
import { GameSymbol } from './GameSymbol';
import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react';
import { Symbols } from '../../../types';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  symbol: Symbols | null,
  clickCell: (index: number) => void,
  isWinner: boolean | undefined,
  disabled: boolean,
  index: number,
}

export const GameCell = memo(function GameCell({ symbol, clickCell, isWinner, disabled, index }: IButtonProps) {

  return (
    <button
      disabled={disabled}
      onClick={() => clickCell(index)}
      className={clsx("border bordwer-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
});