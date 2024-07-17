import clsx from 'clsx';
import '../styles/global.css';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", 'cyrillic'] });

export default ({ Component, pageProps }) => {
  return (
    <div className={clsx(inter.className, 'text-slate-900')}>
      <Component {...pageProps} />
    </div>
  );
};