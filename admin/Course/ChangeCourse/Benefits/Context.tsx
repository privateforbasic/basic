import { useReducer } from "react";

const initialState = {
  title: "",
  description: "",
};

const reducer = (state: any, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
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
