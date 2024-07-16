import { SYMBOL_O, SYMBOL_X } from './constants';
import clsx from 'clsx';

const GameSymbol = ({ symbol }) => {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return 'text-green-500';
    if (symbol === SYMBOL_X) return 'text-red-500';
    return '';
  }
  return <span className={clsx('text-xl leading-6', getSymbolClassName(symbol))}>{symbol}</span>
}

export default GameSymbol;