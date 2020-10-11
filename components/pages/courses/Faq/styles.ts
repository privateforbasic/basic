import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  padding-top: 25px;
  background: #000;

  .container {
    section {
      max-width: 900px;
      text-align: left;
      display: grid;
      grid-row-gap: 25px;
      margin: 25px auto;

      details {
        background: #111;
        border-radius: 15px;
        overflow: hidden;

        &[open] {
          background: #222;
        }

        &:not([open]) {
          summary:hover {
            background: #222;
          }
        }

        summary {
          cursor: pointer;
          font-weight: bold;
          font-size: 1.1em;
          padding: 15px;
          transition: 0.1s;
        }

        p {
          padding: 0 15px 15px 35px;
        }
      }
    }
  }
`;
