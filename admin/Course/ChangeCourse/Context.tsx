import React, { useReducer } from "react";

const reducer = (
  state: { name: string; description: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

const initialState = { name: "", description: "" };
const FormContext = React.createContext(null);

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
