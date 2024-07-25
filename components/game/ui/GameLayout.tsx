import { ReactNode } from "react"

interface GameLayoutProps {
  homeLink: ReactNode,
  gameTitle: ReactNode,
  gameInfo: ReactNode,
  playersList: ReactNode,
  gameMoveInfo: ReactNode,
  actions: ReactNode[],
  gameCells: ReactNode,
}

export const GameLayout = ({
  homeLink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells
}: GameLayoutProps) => {
  return (
    <div className="mb-10">
      <div className="pl-2">
        {homeLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div className="mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between">
        {playersList}
      </div>
      <div className='mt-6 bg-white rounded-2xl shadow-md pt-5 pb-7 px-8'>
        <div className="flex gap-3 items-center">
          <div className="mr-auto">
            {gameMoveInfo}
          </div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-3">
          {gameCells}
        </div>
      </div>
    </div>
  )
}