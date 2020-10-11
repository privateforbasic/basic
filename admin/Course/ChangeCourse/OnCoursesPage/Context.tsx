import { useReducer } from "react";

const initialState = { name: "", description: "", gradient: "", imageName: "" };

const reducer = (state, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "gradient":
      return { ...state, gradient: action.payload };
    case "imageName":
      return { ...state, imageName: action.payload };
    case "clearAll":
      return { ...initialState };
    default:
      return state;
  }
};

export const useFormReducer = (): [any, any] => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
