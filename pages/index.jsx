import { GameTitle } from "../components/Game/GameTitle";
import { GameInfo } from "../components/Game/GameInfo";
import { Header } from "../components/Header";

const HomePage = () => {

  return (
    <div className="bg-slate-50 min-h-screen leading-tight -mb-0.5">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle />
        <h1 className="text-4xl leading-tight">Крестики нолики</h1>
        <GameInfo className="mt-4" />
      </main>
    </div>
  );
};

export default HomePage;