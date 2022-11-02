import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";
import { links } from "../data/dummy";
import { useRouter } from "next/router";
import { useStateContext } from "../context/contextProvider";

const Sidebar = () => {
  const router = useRouter();
  const { activeMenu } = useStateContext();

  return (
    <div>
      {activeMenu ? (
        <div
          className="shadow-2xl md:shadow-xl
  border border-t-white flex flex-col items-start 
  divide-y-2 flex-wrap h-screen"
          style={{ zIndex: "10000" }}
        >
          {/* Logo and brand section */}
          <div
            className="flex flex-row  justify-center w-28 h-16
 items-center p-2 ml-3  cursor-pointe gap-1 pb-4 md:flex-col"
          >
            <Image src={logo} objectFit="contain" layout="intrinsic" />
            <h4 className="font-bold text-xl">Brand</h4>
          </div>

          <div className="relative w-full ">
            {links.map((item, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-3 m-4
           text-gray-500 hover:bg-slate-200 w-auto p-2 overflow-hidden rounded-md cursor-pointer"
                onClick={() => {
                  router.push(item.to);
                }}
              >
                <span className="h-5 w-5 block">{item.icon}</span>
                <h4 className="text-md font-thin ">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
