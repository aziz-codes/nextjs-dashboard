import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Index = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
      <Header />
    </>
  );
};

export default Index;
