import React, { useContext, useState } from "react";

import { isEmptyValues } from "utils/isEmptyValues";
import { useMutation, gql } from "@apollo/client";
import { useFormReducer } from "./Context";

import { FieldSet } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const SEND_NEW_VALUES = gql`
  mutation SEND_NEW_VALUES($input: CourseLandingInput!) {
    changeCourseLanding(input: $input)
  }
`;

const Landing = ({ data, refetch, queryloading }) => {
  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);
  const [sendNewValues] = useMutation(SEND_NEW_VALUES);

  const {
    href,
    landing: { name, description, signUp },
  } = data;

  const handleOnSubmit = e => {
    e.preventDefault();
    const newValues = {
      name: state.name ? state.name : name,
      description: state.description ? state.description : description,
      signUp: {
        href: state.signUp.href ? state.signUp.href : signUp.href,
        text: state.signUp.text ? state.signUp.text : signUp.text,
      },
    };

    setLoading(true);
    sendNewValues({ variables: { input: { href, newValues } } })
      .then(() => refetch())
      .then(() => setLoading(false));
  };

  return (
    <Container>
      <form className="last-step" onSubmit={handleOnSubmit}>
        <FieldSet
          title="Name"
          value={name}
          actionType="name"
          dispatch={dispatch}
          state={state}
        />
        <FieldSet
          title="Description"
          value={description}
          actionType="description"
          dispatch={dispatch}
          state={state}
        />
        <FieldSet
          title="Sign up name"
          value={signUp.text}
          actionType="text"
          state={state.signUp}
          dispatch={dispatch}
        />
        <FieldSet
          title="Sign up url"
          value={signUp.href}
          actionType="href"
          state={state.signUp}
          dispatch={dispatch}
        />
        <Button
          type="submit"
          title="Change"
          disabled={!isEmptyValues(state) || loading}
        />
      </form>
    </Container>
  );
};

export default Landing;
