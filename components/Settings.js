import React, { useContext } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useStateContext } from "../context/contextProvider";
const Settings = () => {
  const { open, setOpen } = useStateContext();
  return (
    <div className="absolute right-2 bottom-4 h-9 w-9 rounded-full flex items-center justify-center hover:shadow-xl">
      <Cog6ToothIcon
        className="h-7 w-7 rounded-full  cursor-pointer hover:scale-125 transition-all duration-100 ease-in-out"
        onClick={() => {
          setOpen(true);
        }}
      />
    </div>
  );
};

export default Settings;
