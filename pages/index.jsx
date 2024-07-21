import { Game } from "../components/game/Game";
import { Header } from "../components/Header";
import { useState } from "react";

const HomePage = () => {
  const [playersNumber] = useState(2);
  

  return (
    <Layout header={<Header />}>
      <Game />
    </Layout>
  );
};

function Layout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">
        {children}
      </main>
    </div>
  );
}


export default HomePage;