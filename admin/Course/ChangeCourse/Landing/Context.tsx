import { useReducer } from "react";

const initialState = {
  name: "",
  description: "",
  signUp: { href: "", text: "" },
};

const reducer = (state: any, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "text":
      return { ...state, signUp: { ...state.signUp, text: action.payload } };
    case "href":
      return { ...state, signUp: { ...state.signUp, href: action.payload } };
    case "clearAll":
      return {
        name: "",
        description: "",
        signUp: { href: "", text: "" },
      };
    default:
      return state;
  }
};

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
