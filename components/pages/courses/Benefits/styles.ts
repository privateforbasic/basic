import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  margin-top: 65px;

  .container {
    h1 {
      padding: 25px 0;

      > span > span:first-of-type {
        background: #fff;
        color: #111;
        border-radius: 10px;
        padding: 5px 20px 5px 10px;
        margin-right: -20px;

        & + span {
          color: #111;
          margin-right: 20px;
        }
      }
    }

    section {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-top: 100px;
      padding-bottom: 50px;

      & > h2 {
        align-self: center;
        margin: 25px 0;

        ${theme.breakpoints.up("md")} {
          margin: 0;
        }
      }

      article {
        width: 100%;

        ${theme.breakpoints.up("md")} {
          width: calc(90% / 3);
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
  }
`;
