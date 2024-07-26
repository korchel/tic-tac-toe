import ZeroIcon from './icons/zero.svg';
import CrossIcon from './icons/cross.svg';
import TriangleIcon from './icons/triangle.svg';
import SquareIcon from './icons/square.svg';
import { Symbols } from '../../../types';

interface GameSymbolProps {
  symbol: Symbols,
  className: string,
}

export const GameSymbol = ({ symbol, className }: GameSymbolProps) => {
  const Icon = {
    [Symbols.Cross]: CrossIcon,
    [Symbols.Zero]: ZeroIcon,
    [Symbols.Triangle]: TriangleIcon,
    [Symbols.Square]: SquareIcon,
  }[symbol];

  return <Icon className={className} />;
};
