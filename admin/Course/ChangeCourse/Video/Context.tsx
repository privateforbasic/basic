import { useReducer } from "react";

const initialState = {
  title: "",
  href: "",
};

const reducer = (state: any, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "href":
      return { ...state, href: action.payload };
    default:
      return state;
  }
};

export const useFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
