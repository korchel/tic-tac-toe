import Image, { StaticImageData } from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import avatarSRC from "./avatar.png";
import clsx from "clsx";

interface ProfileProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  name: string,
  rating: number,
  avatar?: StaticImageData,
}

export const Profile = ({className, name, rating, avatar = avatarSRC}: ProfileProps): JSX.Element => {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start text-teal-600")} >
      <Image src={avatar} alt="avatar" height={48} width={48} />
      <div className="overflow-hidden">
        <div className="text-lg leading-toght truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">Рейтинг: {rating}</div>
      </div>
    </div>
  );
};