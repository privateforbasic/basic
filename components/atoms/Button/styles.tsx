import styled, { css } from "styled-components";
import theme from "@styles/theme";
import { StyledButtonProps } from "./types";

const variants = {
  primary: css`
    color: ${theme.colors.white};
    background: transparent;
    border: 3px solid ${theme.colors.white};
  `,
  secondary: css``,
  tercary: css``,
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 15px 25px;
  display: inline-block;
  text-align: center;
  font-size: 1.2em;
  border-radius: 15px;
  font-weight: bold;
  margin: auto;

  /* on mouse move */
  :hover,
  :focus {
    background-color: ${theme.colors.white};
    color: #111;
    box-shadow: ${theme.shadow.btn};
  }

  /* on click */
  :active {
  }

  ${theme.breakpoints.down("xs")} {
  }

  ${({ variant }) => variants[variant]}
`;
