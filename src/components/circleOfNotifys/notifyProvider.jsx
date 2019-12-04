import React, { useReducer } from "react";

const initialState = { counter: 0 };

export const notifysReducer = (state, action) => {
  switch (action.type) {
    case "NEW_NOTIFY":
      return { counter: state.counter + 1 };
    case "RESET_NOTIFYS":
      return { counter: state.counter = 0 };
    default:
      return state;
  }
};

export const NotifyContext = React.createContext();

export const NotifyProvider = ({ childer }) => {
  const [state, dispatch] = useReducer(notifysReducer, initialState);
  return <NotifyContext.Provider value={[state, dispatch]}>{childer}</NotifyContext.Provider>;
};
