import { useState, useEffect } from "react";

let globalState = {};

let listeners = []; // list of function to call to update the state

let actions = {};

//Custom Hook sharing logic and data
export const useStore = () => {
  const setState = useState(globalState)[1]; //only will use second value. when something changes in state it will trigger a re render

  const dispatch = (actionIdentifier) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  //Will run the function when the component that uses it mounts. It will return a cleanup function
  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
