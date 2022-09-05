import React, { createContext, useReducer } from "react";
import newAdReducer from "../reducers/newAdReducer";

export const NewAdContext = createContext();

const NewAdContextProvider = ({ children }) => {
  const initialNewAdState = {
    section2: {
      isShown: true,
    },
    section1: {
      isSectionValid: true,
    },
  };

  const [newAdState, newAdDispatch] = useReducer(
    newAdReducer,
    initialNewAdState
  );

  return (
    <NewAdContext.Provider value={{ newAdState, newAdDispatch }}>
      {children}
    </NewAdContext.Provider>
  );
};

export default NewAdContextProvider;
