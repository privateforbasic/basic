import React, { useState } from "react";

import { useMutation, useQuery, gql } from "@apollo/client";
import { useFormReducer } from "./Context";

import { FieldSet, FieldSetImage } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const CHANGE_DATA = gql`
  mutation CHANGE_DATA($input: OnCoursesPageInput!) {
    changeCourseOnCoursesPage(input: $input)
  }
`;

const LOGOS_DIRECTORY_PATH = "/images/courses/logos/";

const OnCoursesPage = ({ data, refetch, queryloading }) => {
  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);

  const [changeData] = useMutation(CHANGE_DATA);

  const { href, name, image, gradient, description } = data;

  const handleOnSubmit = e => {
    e.preventDefault();
    const newValues: any = Object.entries(state).reduce(
      (acc, [key, val]) => (val ? { ...acc, [key]: val } : acc),
      {}
    );

    if (state.imageName) {
      newValues.image = {
        src: state.imageName,
        alt: state.imageName.slice(0, -4),
      };
      delete newValues.imageName;
    }
    setLoading(true);
    changeData({ variables: { input: { href, newValues } } })
      .then(() => refetch())
      .then(() => setLoading(false))
      .then(() => dispatch({ type: "clearAll" }));
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
        <FieldSetImage
          title="Image"
          value={image.src}
          actionType="imageName"
          dispatch={dispatch}
          state={state}
          directoryPath={LOGOS_DIRECTORY_PATH}
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
