import { GameSymbol } from "./GameSymbol";

export const GameMoveInfo = ({ currentMove, nextMove }) => {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight semibold">
        Ход: <GameSymbol className="w-5 h-5" symbol={currentMove} />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий: <GameSymbol className="w-3 h-3" symbol={nextMove} />
      </div>
    </>
  );
};