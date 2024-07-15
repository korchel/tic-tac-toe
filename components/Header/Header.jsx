import Image from "next/image";
import logo from "./logo.svg";

export const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-md">
      <Image src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 bg-teal-600 text-white rounded-lg px-5 py-2 text-2xl leading-tight">Играть</button>
    </header>
  );
};