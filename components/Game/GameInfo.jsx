import clsx from 'clsx';
import { Profile } from '../Profile/Profile';


export const GameInfo = ({ className }) => {

  return (
    <div className={clsx(className, "bg-white rounded-2xl shadow-md px-8 py-4")}>
      <div>
        <div>
          <Profile />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -right-1"></div>
        </div>
      </div>
    </div>
  );
};
