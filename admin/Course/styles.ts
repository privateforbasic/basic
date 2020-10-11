import theme from "@styles/theme";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: calc(2em + 100px) 2em 2em;

  label {
    color: white;
  }

  input,
  select {
    margin-bottom: 1em;
    display: block;
    padding: 0.3em 0.5em;
    background-color: white;
  }

  input[type="submit"]:disabled {
    background-color: gray;
  }

  form.first-step {
    width: 80%;
    max-width: 600px;
    margin: 0 auto;
    align-self: center;

    select {
      width: 100%;
      font-size: 1em;
      padding: 0.8em 1.3em;
      border-radius: 50px;
      cursor: pointer;
    }
  }

  form.last-step {
    display: grid;
    grid-row-gap: 2em;
    width: 50%;
    min-width: 700px;

    .btns {
      display: flex;
      justify-content: space-between;
    }
  }
`;
