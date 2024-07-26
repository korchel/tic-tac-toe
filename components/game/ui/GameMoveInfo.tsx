import { DetailedHTMLProps, HTMLAttributes } from "react";
import { GameSymbol } from "./GameSymbol";
import { Symbols } from "../../../types";

interface GameMoveInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  currentMove: Symbols,
  nextMove: Symbols,
}

export const GameMoveInfo = ({ currentMove, nextMove }: GameMoveInfoProps) => {

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