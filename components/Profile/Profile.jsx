import Image from "next/image";

import avatar from "./avatar.png";

export const Profile = () => {
  return (
    <div className="flex items-center gap-2 text-start text-teal-600" >
      <Image src={avatar} alt="avatar" height={48} width={48} />
      <div>
        <div className="text-lg leading-toght">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</div>
      </div>
    </div>
  );
};