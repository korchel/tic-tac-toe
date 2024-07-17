import ZeroIcon from './icons/zero.svg';
import CrossIcon from './icons/cross.svg';
import TriangleIcon from './icons/triangle.svg';
import SquareIcon from './icons/square.svg';
import { SYMBOLS } from './constants';

export const GameSymbol = ({ symbol, className }) => {
  const Icon = {
    [SYMBOLS.CROSS]: CrossIcon,
    [SYMBOLS.ZERO]: ZeroIcon,
    [SYMBOLS.TRIANGLE]: TriangleIcon,
    [SYMBOLS.SQUARE]: SquareIcon,
  }[symbol];

  return <Icon className={className} />;
};

export default GameSymbol;