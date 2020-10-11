import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  margin-top: 50px;

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    article {
      width: 100%;

      :nth-of-type(2) {
        margin: 50px auto;
      }

      ${theme.breakpoints.up("md")} {
        width: calc(90% / 3);

        :nth-of-type(2) {
          margin: 0;
        }
      }

      img {
        filter: drop-shadow(0 0px 25px #fff2);
      }

      h2 {
        margin: 25px auto 15px;
      }

      p {
        font-size: 1.1rem;
      }
    }
  }
`;
