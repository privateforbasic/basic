import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  & > svg:first-child {
    background: #131318;
    path {
      fill: #0a0b10;
    }
  }
  & > section {
    display: grid;
    grid-template-columns: auto auto;
    @media screen and (max-width: 1024px) {
      grid-template-columns: auto;
      grid-row-gap: 35px;
    }
    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    }
    align-items: center;
    justify-content: center;
    grid-column-gap: 50px;
    padding: 75px 35px;
    background: linear-gradient(180deg, #0a0b10 10%, #131318 100%);
    h2 {
      padding: 0;
    }
    ul {
      text-align: left;
      display: grid;
      grid-row-gap: 10px;
      li {
        display: flex;
        align-items: center;
        font-size: 1.5em;
        &:before {
          content: url("../images/icons/check.svg");
          display: inline-block;
          width: 25px;
          height: 25px;
          vertical-align: middle;
          margin-right: 15px;
        }
      }
    }
  }
`;
