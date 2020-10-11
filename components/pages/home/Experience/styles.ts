import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 10%;

  ${theme.breakpoints.down("md")} {
    clip-path: ellipse(200% 100% at 50% 0%);
  }

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), #131318),
    linear-gradient(90deg, #f08, #09f);
  clip-path: ellipse(150% 100% at 50% 0%);
  position: relative;
  z-index: 2;
  padding-bottom: 250px;

  & > section {
    display: inline-flex;
    /* font-size: 2em; */
    flex-wrap: wrap;
    justify-content: center;

    & > span {
      width: 100%;

      ${theme.breakpoints.down("xs")} {
        padding-bottom: 1em;
      }

      .year {
        -webkit-text-stroke: 3px rgb(255 1 70);
        text-shadow: 0 3px 15px rgba(255, 1, 70, 0.25);
      }

      .graduate {
        -webkit-text-stroke: 3px rgb(1 255 138);
        text-shadow: 0 3px 15px rgba(1, 255, 138, 0.25);
      }

      .hours {
        -webkit-text-stroke: 3px rgb(1 196 255);
        text-shadow: 0 3px 15px rgba(1, 196, 255, 0.25);
      }

      span:nth-child(1) {
        font-weight: bold;
        color: transparent;
        font-size: 10rem;
        /* vertical-align: middle; */
        text-align: center;
        display: block;

        ${theme.breakpoints.down("xs")} {
          font-size: 20vw;
        }

        &:after {
          content: "+";
          font-size: 0.6em;
          transform: translateY(-0.3em);
          display: inline-block;
          margin-left: 0.1em;
          margin-right: 0.1em;
        }
      }

      span:nth-child(2) {
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }
`;
