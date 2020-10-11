import React, { useContext, useState } from "react";

import { useMutation, gql } from "@apollo/client";
import { useFormReducer } from "./Context";

import { FieldSet } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const SEND_NEW_VALUES = gql`
  mutation SEND_NEW_VALUES($input: OnCoursesPageInput!) {
    changeCourseOnCoursesPage(input: $input)
  }
`;

const OnCoursesPage = ({ data, refetch, queryloading }) => {
  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);
  const [sendNewValues] = useMutation(SEND_NEW_VALUES);

  const { href, name, image, gradient, description } = data;

  const handleOnSubmit = e => {
    e.preventDefault();
    const newValues = Object.entries(state).reduce(
      (acc, [key, val]) => (val ? { ...acc, [key]: val } : acc),
      {}
    );
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
          title="Gradient"
          value={gradient}
          actionType="gradient"
          dispatch={dispatch}
          state={state}
        />
        <Button
          type="submit"
          title="Change"
          disabled={!isEmpty(state) || loading}
        />
      </form>
    </Container>
  );
};

export default OnCoursesPage;

const isEmpty = obj => {
  return Object.values(obj).filter(el => el).length;
};
