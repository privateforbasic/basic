import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  background: #000;
  clip-path: ellipse(200% 100% at 50% 100%);

  ${theme.breakpoints.down("md")} {
    clip-path: ellipse(350% 100% at 50% 100%);
  }

  z-index: 2;
  padding-top: 50px;

  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 5%;
    grid-row-gap: 2.5%;
    align-items: start;

    ${theme.breakpoints.down("md")} {
      grid-template-columns: auto auto;
    }

    ${theme.breakpoints.down(600)} {
      grid-template-columns: auto;
      grid-row-gap: 1.5%;
    }

    article {
      background: #fff;
      overflow: hidden;
      border-radius: 25px;
      color: #000;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
        display: block;

        ${theme.breakpoints.down("xs")} {
          height: 150px;
        }
      }

      h3 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 25px;
        padding: 5%;
        background: #000;
        color: #fff;
        position: relative;
        z-index: 1;
        box-shadow: 0 0 25px #000;
      }

      p {
        padding: 0 25px;
        text-align: justify;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      a {
        font-size: 0.9em;
        margin: 25px;
        padding: 15px;
        display: block;
        background: #0002;
        color: #444;
        font-weight: 100;
        border-radius: 15px;

        &:hover {
          background: #0003;
        }
      }
    }
  }

  & > a {
    margin: 50px auto 100px;
  }
`;
