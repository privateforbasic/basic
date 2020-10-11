import React, { useState } from "react";

import { isEmptyAllValues, isEmptyValues } from "utils/isEmptyValues";
import { useMutation, gql } from "@apollo/client";
import { useFormReducer, useTitleReducer } from "./Context";

import { FieldSet, List } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

const CHANGE_DISCOUNT = gql`
  mutation SEND_NEW_VALUES($input: CourseDiscountInput!) {
    changeCourseDiscount(input: $input)
  }
`;

const ADD_DISCOUNT = gql`
  mutation ADD_DISCOUNT($input: CourseDiscountInput!) {
    addCourseDiscount(input: $input)
  }
`;

const DELETE_DISCOUNT = gql`
  mutation DELETE_DISCOUNT($input: DeleteFieldFromArrayInput!) {
    deleteFiledFromArray(input: $input)
  }
`;

const CHANGE_TITLE = gql`
  mutation CHANGE_TITLE($input: CourseSomeFieldInput!) {
    changeCourseSomeField(input: $input)
  }
`;

const Discounts = ({ data, refetch, queryloading }) => {
  const [index, setIndex] = useState(0);

  const [state, dispatch] = useFormReducer();
  const [loading, setLoading] = useState(false);

  const [titleState, dispatchTitle] = useTitleReducer();
  const [titleLoading, setTitleLoading] = useState(false);

  const [changeTitle] = useMutation(CHANGE_TITLE);
  const [addDiscount] = useMutation(ADD_DISCOUNT);
  const [changeDiscount] = useMutation(CHANGE_DISCOUNT);
  const [deleteDiscount] = useMutation(DELETE_DISCOUNT);

  const {
    href,
    discounts: { title, articles },
  } = data;

  const handleOnSubmit = e => {
    e.preventDefault();

    const discount = articles[index];
    const id = discount
      ? discount.id
      : +articles[articles.length - 1].id + 1 + "";

    const newData = {
      id,
      percentage: state.percentage,
      description: state.description,
      dataAosDelay: state.dataAosDelay,
    };

    const send = discount ? changeDiscount : addDiscount;

    setLoading(true);
    send({ variables: { input: { href, id, newData } } })
      .then(() => refetch())
      .then(() => setLoading(false))
      .then(() => dispatch({ type: "clearAll" }))
      .then(() => index === -1 && setIndex(articles.length));
  };

  const handleChangeTitle = e => {
    e.preventDefault();

    setTitleLoading(true);
    changeTitle({
      variables: {
        input: { href, field: "discounts.title", value: titleState.title },
      },
    })
      .then(() => refetch())
      .then(() => setTitleLoading(false))
      .then(() => dispatchTitle({ type: "clearAll" }));
  };

  const handleOnDelete = () => {
    setLoading(true);
    deleteDiscount({
      variables: {
        input: { href, id: articles[index].id, field: "discounts.articles" },
      },
    })
      .then(() => refetch())
      .then(() => setLoading(false))
  };

  return (
    <>
      <form className="last-step" onSubmit={handleChangeTitle}>
        <FieldSet
          title="Title"
          value={title}
          actionType="title"
          dispatch={dispatchTitle}
          state={titleState}
        />
        <Button
          type="submit"
          title="Change"
          disabled={!isEmptyValues(titleState) || titleLoading}
        />
      </form>
      <List
        list={articles}
        index={index}
        itemName="Discount"
        onClick={(idx: number) => {
          dispatch({ type: "clearAll" });
          setIndex(idx);
        }}
      />
      <Container>
        <form className="last-step" onSubmit={handleOnSubmit}>
          <FieldSet
            title="Percentage"
            value={articles[index]?.percentage}
            actionType="percentage"
            dispatch={dispatch}
            state={state}
          />
          <FieldSet
            title="Description"
            value={articles[index]?.description}
            actionType="description"
            dispatch={dispatch}
            state={state}
          />
          <FieldSet
            title="Data AOS delay"
            value={articles[index]?.dataAosDelay}
            actionType="dataAosDelay"
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

export default Discounts;
