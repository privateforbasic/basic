import styled, { css } from "styled-components";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const variants = {
  delete: css`
    color: #626262;
    background-color: #401515;
    box-shadow: 0px 0px 30px #3c1616;

    :hover {
      color: #9e9e9e;
      background-color: #791f1f;
      box-shadow: 0px 0px 30px #562222;
    }

    :disabled {
      color: #2f2f30;
      background-color: #291212;
      box-shadow: 0px 0px 30px #2b1010;
    }
  `,
  secondary: css``,
  tercary: css``,
};

export const StyledButton = styled.button<ButtonInterface>`
  width: fit-content;
  padding: 0.8em 1.5em;
  border-radius: 1em;
  font-size: 1em;

  color: #9e9e9e;
  background-color: #3c3b3d;
  box-shadow: 0px 0px 30px #191920;

  :disabled {
    color: #131318;
    background-color: #1c1b1e;
    cursor: no-drop;
  }

  ${({ variant }) => variants[variant]}

  &[data-value="true"] {
    box-shadow: 0px 0px 60px #4b9c6d;
  }
`;
