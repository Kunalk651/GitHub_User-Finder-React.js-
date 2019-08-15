import React, { useReducer } from "react";
import AlertContext from "../alert/AlertContext";
import AlertReducer from "../alert/AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../Types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlerts = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlerts
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;