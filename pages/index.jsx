import { GameTitle } from "../components/Game";
import { GameInfo } from "../components/Game";
import { Header } from "../components/Header";
import { GameField } from "../components/Game";
import { useState } from "react";

const HomePage = () => {
  const [playersNumber] = useState(2);

  return (
    <div className="bg-slate-50 min-h-screen leading-tight -mb-0.5">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersNumber={playersNumber} />
        <GameInfo playersNumber={playersNumber} className="mt-4" />
        <GameField playersNumber={playersNumber} className="mt-6"/>
      </main>
    </div>
  );
};

export default HomePage;