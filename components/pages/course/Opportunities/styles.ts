import styled from "styled-components";
import theme from "@styles/theme";

import { commonStyles } from "../Benefits/styles";

export const StyledSection = styled.section`
 > section {
    ${commonStyles}
  }

  section {
    article {
      h3 {
        font-family: ${theme.fonts.en};
        font-size: 1.5em;
        font-weight: 500;
        text-transform: none;
      }
    }
  }
`;
