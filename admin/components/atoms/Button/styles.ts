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
  secondary: css`
    color: #9e9e9e;
    background-color: #2a4238;
    box-shadow: 0px 0px 30px #1d2e27;

    :hover:not(:disabled) {
      background-color: #284d3d;
      box-shadow: 0px 0px 30px #294137;
    }

    /* :disabled {
      color: #2f2f30;
      background-color: #291212;
      box-shadow: 0px 0px 30px #2b1010;
    } */
  `,
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
  transition: all 0.3s ease;

  :hover:not(:disabled) {
    color: #c5c5c5;
    background-color: #5c5b5e;
    box-shadow: 0px 0px 30px #393945;
  }

  :disabled {
    color: #131318;
    background-color: #1c1b1e;
    cursor: no-drop;
  }

  :active {
    transform: scale(0.95);
  }

  ${({ variant }) => variants[variant]}

  &[data-value="true"] {
    box-shadow: 0px 0px 60px #4b9c6d;
  }
`;
