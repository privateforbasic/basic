import styled, { css } from "styled-components";

const inputStyles = css`
  width: 100%;
  padding: 1em 1.5em;
  border-radius: 1em;
  margin: 1em 0;
  background-color: #29282b;
  color: white;
  font-size: 1em;
  border: 1px solid #29282b;

  :focus {
    border-color: #606060;
  }
`;

export const StyledLabel = styled.label`
  p {
    font-size: 0.8em;
  }

  input {
    ${inputStyles}
  }
`;

export const DivAsInput = styled.div`
  ${inputStyles}
  padding: 1em 7.5em 1em 1.5em;
  border-color: #29282b !important;
  color: #606060;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  button {
    position: absolute;
    right: 0;
    padding: 0 1.5em;
    font-size: inherit;
    height: 100%;
    color: #9e9e9e;
    background-color: #3c3b3d;
    box-shadow: 0px 0px 60px #191920;

    &[data-value="true"] {
      color: #4b9c6d;
      box-shadow: 0px 0px 60px #4b9c6d;
    }
  }

  img {
    height: 4em;
    width: 4em;
    object-fit: contain;
  }
`;
