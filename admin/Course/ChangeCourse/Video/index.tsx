import React, { useContext, useState } from "react";

import { isEmptyValues } from "utils/isEmptyValues";
import { useMutation, gql } from "@apollo/client";
import { useFormReducer } from "./Context";

import { FieldSet } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const SEND_NEW_VALUES = gql`
  mutation SEND_NEW_VALUES($input: CourseVideoInput!) {
    changeCourseVideo(input: $input)
  }
`;

const Video = ({ data, refetch, queryloading }) => {
  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);
  const [sendNewValues] = useMutation(SEND_NEW_VALUES);

  const {
    href,
    video: { title, href: videoHref },
  } = data;

  const handleOnSubmit = e => {
    e.preventDefault();
    const newValues = {
      title: state.title ? state.title : title,
      href: state.href ? state.href : videoHref,
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
          title="Title"
          value={title}
          actionType="title"
          dispatch={dispatch}
          state={state}
        />
        <FieldSet
          title="Video link"
          value={videoHref}
          actionType="href"
          dispatch={dispatch}
          state={state}
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

export default Video;
