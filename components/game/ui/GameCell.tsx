import clsx from 'clsx';
import { GameSymbol } from './GameSymbol';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { Symbols } from '../../../types';

interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  symbol: Symbols | null,
  clickCell: () => void,
  isWinner: boolean | undefined,
  disabled: boolean,
}

export const GameCell = ({ symbol, clickCell, isWinner, disabled }: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={clickCell}
      className={clsx("border bordwer-slate-200 -ml-px -mt-px flex items-center justify-center", isWinner && "bg-orange-600/10")}
    >
      {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
    </button>
  );
};