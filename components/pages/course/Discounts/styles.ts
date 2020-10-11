import styled, { css } from "styled-components";
import theme from "@styles/theme";


export const StyledSection = styled.section`
  position: relative;
  text-align: center;
  background-color: #13131855;

  & > section {
    display: flex;
    justify-content: space-evenly;

    ${theme.breakpoints.down("xs")} {
      flex-wrap: wrap;
    }
  }

  article {
    max-width: 25%;
    padding: 1.5%;
    border-radius: 2.5em;

    ${theme.breakpoints.down("xs")} {
      max-width: 100%;

      &:nth-of-type(1) {
        margin: 30px auto;
      }
      &:nth-of-type(2) {
        order: -1;
      }
    }

    h2 {
      -webkit-text-fill-color: #fff;
      text-fill-color: #fff;
      font-family: ${theme.fonts.en} !important;
      font-size: 1.5em !important;
      font-weight: 500 !important;
      text-transform: none;
    }

    :nth-child(1) {
      section {
        background: #e74047;
      }
    }
    :nth-child(2) {
      section {
        background: #efb83c;
      }
    }
    :nth-child(3) {
      section {
        background: #eb5348;
      }
    }

    section {
      display: flex;
      width: 120px;
      height: 120px;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      overflow: hidden;
      border-bottom: 5px solid #0005;
      margin: auto auto 20px;

      /* &.discount100 {
        background: #efb83c;
      }
      &.discount50 {
        background: #e74047;
      }
      &.discount30 {
        background: #eb5348;
      } */

      h3 {
        -webkit-text-fill-color: #fff;
        text-fill-color: #fff;
        font-size: 3em;
      }
    }
  }
`;
