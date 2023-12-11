// MyContext.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState("");

  const updateGlobalState = (newValue) => {
    setGlobalState(newValue);
  };

  return (
    <MyContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyProvider, useMyContext };
