import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const commonStyles = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  ${theme.breakpoints.down(1280)} {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 50px;
  }

  ${theme.breakpoints.down("md")} {
    grid-template-columns: 1fr 1fr;
  }

  ${theme.breakpoints.down(600)} {
    grid-template-columns: 1fr;
  }

  grid-row-gap: 35px;
  grid-column-gap: 35px;
  text-align: center;

  article {
    img {
      margin: 0 auto 25px;
    }

    h2 {
      text-transform: capitalize;
    }

    p {
      font-style: italic;
      color: #fff9;
      font-size: 0.9em;
      padding: 0 15%;
      margin-top: 15px;
    }
  }
`;

export const StyledSection = styled.section`
  position: relative;
  z-index: 1;
  margin-top: -50px;

  & > svg {
    path {
      fill: #13131855;
    }
  }

  & > section {
    background: #13131855;

    ${theme.breakpoints.down("md")} {
      padding-top: 25px;
    }
  }

  ${theme.breakpoints.up("md")} {
    &:before {
      content: "";
      background: #13131855;
      width: 100%;
      height: 100px;
      display: block;
      position: absolute;
      bottom: -100px;
    }
  }
  > section > section {
    ${commonStyles}
  }
`;
