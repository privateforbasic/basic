import { useReducer } from "react";

const initialState = {
  percentage: "",
  description: "",
  dataAosDelay: "",
};

const reducer = (state: any, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "percentage":
      return { ...state, percentage: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "dataAosDelay":
      return { ...state, dataAosDelay: action.payload };
    case "clearAll":
      return { ...initialState };
    default:
      return state;
  }
};

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

//

const titleState = {
  title: "",
};

const titleReducer = (
  state: any,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "clearAll":
      return { ...initialState };
    default:
      return state;
  }
};

export const useTitleReducer = () => {
  const [state, dispatch] = useReducer(titleReducer, titleState);
  return [state, dispatch];
};
