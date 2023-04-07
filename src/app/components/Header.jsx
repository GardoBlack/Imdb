import Link from "next/link";
import MenuItem from "./MenuItem";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
      </div>
      <div className="">
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-8">
        <DarkModeSwitch />
        <Link href="/">
          <h2>
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">CLONE</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
