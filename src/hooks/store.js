import React, { createContext, useContext, useReducer } from "react";
import mainReducer from "../reducers";
export const StateContext = createContext();

export const StoreProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(mainReducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStore = () => useContext(StateContext);

export { mainReducer };
