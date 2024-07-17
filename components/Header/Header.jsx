import Logo from "./logo.svg";

import ArrowDownIcon from "./arrowDown.svg";
import { Profile } from "../Profile/Profile";
import { ButtonComponent } from "../uikit/ButtonComponent";

export const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-md">
      <Logo />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <ButtonComponent className="w-44" variant="primary" size="lg">Играть</ButtonComponent>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600" >
        <Profile />
        <ArrowDownIcon className="text-teal-600" />
      </button>
    </header>
  );
};