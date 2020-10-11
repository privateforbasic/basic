import theme from "@styles/theme";
import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  background-color: #1c1b1e; /* footer color */
  border-radius: 2em;
  padding: 2em;
  border: none;
  margin-top: -0.6em; /* for lagend */

  ${theme.breakpoints.down("md")} {
    min-width: 90%;
  }

  legend {
    font-size: 1.3em;
    color: white;
    transform: translateY(2em);
    margin-bottom: 1em;
  }
`;
