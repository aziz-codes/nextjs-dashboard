import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initialState = {
  sidebar: true,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  const [open, setOpen] = useState(false);

  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        open,
        setOpen,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
