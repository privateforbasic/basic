import React, { useState } from "react";

import { isEmptyAllValues, isEmptyValues } from "utils/isEmptyValues";
import { useMutation, gql } from "@apollo/client";
import { useFormReducer } from "./Context";

import { FieldSet, List } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const CHANGE_BENEFIT = gql`
  mutation CHANGE_BENEFIT($input: CourseBenefitInput!) {
    changeCourseBenefit(input: $input)
  }
`;

const ADD_BENEFIT = gql`
  mutation ADD_BENEFIT($input: CourseBenefitInput!) {
    addCourseBenefit(input: $input)
  }
`;

const DELETE_BENEFIT = gql`
  mutation DELETE_BENEFIT($input: DeleteFieldFromArrayInput!) {
    deleteFiledFromArray(input: $input)
  }
`;

const Benefits = ({ data, refetch, queryloading }) => {
  const [index, setIndex] = useState(0);
  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);
  const [changeBenefit] = useMutation(CHANGE_BENEFIT);
  const [addBenefit] = useMutation(ADD_BENEFIT);
  const [deleteBenefit] = useMutation(DELETE_BENEFIT);

  const { href, benefits } = data;

  const handleOnSubmit = e => {
    e.preventDefault();

    const benefit = benefits[index];

    const id = benefit
      ? benefit.id
      : Number(benefits[benefits.length - 1].id) + 1 + "";

    const newData = {
      id,
      image: {
        src: benefit
          ? benefit.image.src
          : "newSrc" /* state.imageSrc ? state.imageSrc : benefit.image.src */,
        alt: benefit
          ? benefit.image.alt
          : "alt" /* state.imageAlt ? state.imageAlt : benefit.image.alt */,
      },
      title: state.title ? state.title : benefit.title,
      description: state.description ? state.description : benefit.description,
    };

    const send = benefit ? changeBenefit : addBenefit;

    setLoading(true);
    send({
      variables: { input: { href, id, newData } },
    })
      .then(() => refetch())
      .then(() => setLoading(false))
      .then(() => dispatch({ type: "clearAll" }))
      .then(() => index === -1 && setIndex(benefits.length));
  };

  const handleOnDelete = () => {
    setLoading(true);
    deleteBenefit({
      variables: { input: { href, id: benefits[index].id, field: "benefits" } },
    })
      .then(() => refetch())
      .then(() => setLoading(false));
  };

  return (
    <>
      <List
        list={benefits}
        index={index}
        itemName="Benefit"
        onClick={(idx: number) => {
          dispatch({ type: "clearAll" });
          setIndex(idx);
        }}
      />
      <Container>
        <form className="last-step" onSubmit={handleOnSubmit}>
          <FieldSet
            title="Title"
            value={benefits[index]?.title}
            actionType="title"
            dispatch={dispatch}
            state={state}
          />
          <FieldSet
            title="Description"
            value={benefits[index]?.description}
            actionType="description"
            dispatch={dispatch}
            state={state}
          />
          <div className="btns">
            <Button
              type="submit"
              title={index === -1 ? "Add" : "Change"}
              disabled={
                index === -1
                  ? !isEmptyAllValues(state)
                  : !isEmptyValues(state) || loading
              }
            />
            <Button
              type="button"
              title="Delete"
              variant="delete"
              onClick={handleOnDelete}
              disabled={index === -1 || loading}
            />
          </div>
        </form>
      </Container>
    </>
  );
};

export default Benefits;
