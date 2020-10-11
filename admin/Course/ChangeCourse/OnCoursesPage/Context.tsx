import { useReducer } from "react";

const initialState = { name: "", description: "", gradient: "" };

const reducer = (
  state: { name: string; description: string; gradient: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "gradient":
      return { ...state, gradient: action.payload };
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
