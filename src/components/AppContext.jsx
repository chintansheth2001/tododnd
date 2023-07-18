import { createContext, useReducer } from "react";
import { appData } from "./StateData";
import reducer from "./Reducer";

export const AppContext = createContext();

const initialState = appData;

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
export default Provider;
