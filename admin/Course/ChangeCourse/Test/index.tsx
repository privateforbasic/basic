import React, { useState } from "react";

import { isEmptyAllValues, isEmptyValues } from "utils/isEmptyValues";
import { useMutation, gql } from "@apollo/client";
import { useFormReducer, useTitleReducer } from "./Context";

import { FieldSet, List } from "admin/components/molecules";
import { Button } from "admin/components/atoms";
import { Container } from "./styles";

export const UPLOAD_FILE = gql`
  mutation uploadFile($input: FileUpload!) {
    uploadFile(input: $input) {
      filename
    }
  }
`;

const Test = ({}) => {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleFile = e => {
    e.preventDefault();

    const {
      target: {
        validity,
        files: [file],
      },
    } = e;

    console.log(file);

    validity.valid &&
      uploadFile({ variables: { input: { path: "public/images/", file } } });
  };

  return (
    <>
      {/* <form className="last-step" onSubmit={handleChangeTitle}>
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
      /> */}
      <Container>
        <form>
          <input onChange={handleFile} type="file" required />
          <button>Add</button>
        </form>
        {/*  <form className="last-step" onSubmit={handleOnSubmit}>
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
        </form> */}
      </Container>
    </>
  );
};

export default Test;
