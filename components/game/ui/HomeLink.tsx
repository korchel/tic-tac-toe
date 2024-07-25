import Link from "next/link";
import ArrowLeftIcon from "./icons/arrowLeft.svg";

export const HomeLink = () => {
  return (
    <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
      <ArrowLeftIcon />
      На главную
    </Link>
  );
};