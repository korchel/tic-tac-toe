import { GameTitle } from "../components/Game";
import { GameInfo } from "../components/Game";
import { Header } from "../components/Header";
import { GameField } from "../components/Game";

const HomePage = () => {

  return (
    <div className="bg-slate-50 min-h-screen leading-tight -mb-0.5">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle />
        <h1 className="text-4xl leading-tight">Крестики нолики</h1>
        <GameInfo className="mt-4" />
        <GameField className="mt-6"/>
      </main>
    </div>
  );
};

export default HomePage;