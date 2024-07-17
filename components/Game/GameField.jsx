import clsx from "clsx";
import ZeroIcon from './icons/zero.svg';
import CrossIcon from './icons/cross.svg';
import { ButtonComponent } from "../uikit/ButtonComponent";

const cells = new Array(19 * 19).fill(null);

export const GameField = ({ className }) => {
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo actions={
        <>
          <ButtonComponent variant="primary" size="md">Ничья</ButtonComponent>
          <ButtonComponent variant="outline" size="md">Сдаться</ButtonComponent>
        </>
        }
      />
      <GameGrid>
        {cells.map((_, i) => (
          <GameCell key={i}>
            <CrossIcon className="w-5 h-5" />
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
};

function GameFieldLayout({ children, className }) {
  return (
    <div className={clsx(className, 'bg-white rounded-2xl shadow-md pt-5 pb-7 px-8')}>
      {children}
    </div>
  );
}

function GameMoveInfo({ actions }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight semibold">
          Ход: <ZeroIcon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <CrossIcon />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px pt-3">
      {children}
    </div>
  );
}

function GameCell({ children }) {
  return (
    <button className="border bordwer-slate-200 -ml-px -mt-px flex items-center justify-center">
      {children}
    </button>
  );
}