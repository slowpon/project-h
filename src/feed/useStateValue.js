import React, { createContext, useContext, useReducer} from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={userReducer
    (reducer, initialState)}>
      {children}
    </StateContext.Provider>
);


// Whenever we want to pull something from the data layer ,
// we use this use state value hook
export const useStateValue = () => useContext(StateContext);