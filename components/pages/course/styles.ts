import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import theme from "@styles/theme";

interface globalstyle {
  gradient: string;
}

export const GlobalStyles: GlobalStyleComponent<
  globalstyle,
  any
> = createGlobalStyle`
  main {
    position: relative; 
    display: grid;
    grid-row-gap: 100px;
    color: #fff;
    text-align: center;

    ${theme.breakpoints.down("md")}{
      justify-content: center;
      grid-row-gap: 60px;
    }
    
     > svg:first-of-type {
      width: 45%;
      position: absolute;
      top: 200px;
      display: block;
      animation: animateWave 5s ease-in-out alternate infinite;
      transform-origin: top;
      overflow: hidden;
      z-index: 0;
      height: auto;

      ${theme.breakpoints.down("xs")}{
        width: 75%;
      }
    }

    @keyframes animateWave {
      0% {
        transform: scale(1, 1);
      }
      100% {
        transform: scale(1.05, 1.1);
      }
    }

    & > section:not(:first-of-type) {
      & > section {
        padding: 0 35px;

        ${theme.breakpoints.down("md")}{
          padding-left: 2.5%;
          padding-right: 2.5%;
        }

        ${theme.breakpoints.down("xs")}{
          padding-left: 5%;
          padding-right: 5%;
        }
      }

      & > h2 {
        padding-bottom: 40px;
        display: inline-block;

        ${theme.breakpoints.down("xs")}{
          padding-left: 5%;
          padding-right: 5%;
        }
      }
    }

    h1,
    h2 {
      text-align: center;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      background-image: ${({ gradient }) => gradient}
    }

    article {
      img {
        height: 110px;
        margin: auto;

        @media screen and (max-width: 600px) {
          height: 100px;
        }
      }
    }
  }
`;
