import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  & > section {
    background: linear-gradient(180deg, #0a0b10 10%, #131318 100%);

    h2 {
      padding-top: 50px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 60px 0 30px;
      justify-content: space-evenly;

      ${theme.breakpoints.up("xs")} {
        padding: 80px 0 30px;
        justify-content: center;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        margin: 0 0px 50px;

        ${theme.breakpoints.down(600)} {
          width: 100%;
        }

        ${theme.breakpoints.up("xs")} {
          width: auto;
          margin: 0 50px 50px;
        }

        a {
          text-align: center;
          display: block;
          overflow: hidden;
          width: 100%;
          transition: 0.25s;

          &:hover {
            transform: scale(1.05);
          }

          img {
            filter: invert(1);
            margin: auto;
            height: 33px;
            max-height: 33px;
            max-width: 200px;
          }
        }
      }
    }
  }
`;
