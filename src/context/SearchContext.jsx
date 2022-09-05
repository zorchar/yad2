import React, { createContext, useReducer } from "react";
import searchReducer from "../reducers/searchReducer";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const initialSearchState = {};

  const [searchState, searchDispatch] = useReducer(
    searchReducer,
    initialSearchState
  );

  return (
    <SearchContext.Provider value={{ searchState, searchDispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
