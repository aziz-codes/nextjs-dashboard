import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useStateContext } from "../context/contextProvider";

const Header = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div
      className="top-0 flex flex-row  mt-3
    items-center justify-between gap-3
       mr-2"
      style={{ zIndex: "0" }}
    >
      <Bars3Icon
        className="headerIcons text-blue-600 ml-2"
        title="toggle sidebar"
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      />
      <div className="flex gap-4">
        <MagnifyingGlassIcon className="headerIcons" />
        <div className="relative headerIcons">
          <div
            className="absolute -top-2 z-50 -right-1 text-xs w-4 h-4 
      rounded-full bg-red-500 font-bold flex items-center justify-center
      animate-pulse"
          >
            3
          </div>
          <BellIcon className="headerIcons" />
        </div>
        <UserCircleIcon className="headerIcons" />
      </div>
    </div>
  );
};

export default Header;
