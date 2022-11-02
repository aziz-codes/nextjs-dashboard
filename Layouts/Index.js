import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useStateContext } from "../context/contextProvider";
const Index = ({ children }) => {
  const { activeMenu } = useStateContext();
  return (
    <div className="flex flex-row flex-wrap overflow-hidden min-h-screen w-full">
      {activeMenu ? (
        <div className="relative w-64 float-left">
          <Sidebar />
        </div>
      ) : (
        <div className="relative w-0"></div>
      )}
      <div className="min-h-screen w-full flex-1 flex-col">
        <div className="fixed md:static w-full">
          <Header />
        </div>

        <div className="mt-14 ml-3">{children}</div>
      </div>
    </div>
  );
};

export default Index;
