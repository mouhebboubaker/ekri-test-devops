import React from "react";
import { createContext } from "react";


export const CreateAnnonceProvider = ({ children }) => {
  const data = {
    title: "hello",
    id: 1,
  };

  return (
    <CreateAnnonceContext.Provider value={{ data }}>
      {children}
    </CreateAnnonceContext.Provider>
  );
};
