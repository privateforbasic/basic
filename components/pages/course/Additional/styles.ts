import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  margin: 0 0 35px;

  @media screen and (min-width: 1024px) {
    margin: 0 auto 35px;
  }

  section {
    width: 954px;

    @media screen and (max-width: 1024px) {
      width: auto;
    }

    ul {
      width: 100%;
      display: grid;
      grid-row-gap: 15px;
      margin: 0 auto;
      padding: 25px 30px;
      background: #ffffff0a;
      border-radius: 25px;
      font-size: 1.1em;
      text-align: left;

      li {
        display: flex;

        :last-child {
          a {
            text-decoration: underline;
          }

          ::before {
            content: "";
            margin-right: 30px;
          }
        }

        ::before {
          content: "✔";
          margin-right: 15px;
        }
      }
    }
  }
`;
