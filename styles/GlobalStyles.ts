import { createGlobalStyle } from "styled-components";
import { fontfaces, fonts } from "./fonts";
import * as breakpoints from "./breakpoints";

const GlobalStyles = createGlobalStyle`
  ${fontfaces()}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    scroll-behavior: smooth;

    &[lang='en'] {
      body {
        font-family: ${fonts.en};

        h1,
        h2 {
          font-family: ${fonts.agency};
          font-size: 3em;
          font-weight: normal;
        }

        h3 {
          font-family: ${fonts.agency};
          font-size: 2.2em;
          font-weight: 100;
        }

        input,
        select,
        textarea,
        button {
          font-family: ${fonts.en};
        }
      }
    }

    &[lang='hy'] {
      body {
        font-family: ${fonts.hy};

        h1 {
          font-size: 2em;
        }

        h2 {
          font-size: 1.8em;
        }

        h3 {
          font-size: 2.2em;
          font-weight: 100;
        }

        header nav {
          line-height: 1.1;
        }

        input,
        select,
        textarea,
        button {
          font-family: ${fonts.hy};
        }
      }
    }
  }

  body {
    letter-spacing: 0.01em;
    background-color: #131318;

    ${breakpoints.down("md")} {
      font-size: 0.9em;
    }
    
    &.menu-opened {
      overflow: hidden;
    }
  }

  #__next {
    overflow: hidden;
  }

  #nprogress{ 
    .bar {
      z-index: 100000;
      box-shadow: none !important;
    }

    .spinner {
      display: none;
    }
  }

  input,
  select,
  textarea,
  button {
    outline: none;
    appearance: none;
    border: 0;
  }

  button {
    user-select: none;
    white-space: nowrap;
		cursor: pointer;
		background: none;
		padding: 0;
		margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;

    &.sign-up {
      padding: 15px 25px;
      display: inline-block;
      border: 3px solid #fff;
      text-align: center;
      font-size: 1.2em;
      border-radius: 15px;
      font-weight: bold;
      margin: auto;

      &:hover {
        background-color: #fff;
        color: #111;
        box-shadow: 0 0 50px -10px #fff3;
      }
    }
  }

  ul {
    list-style-type: none;
  }

  img {
    display: block;
    /* vertical-align: middle; */
  }

  svg {
    display: block;

    ${breakpoints.down("md")} {
      z-index: 1;
      position: relative;
    }
  }

  .container {
    width: 100%;
    max-width: 1400px;
    padding: 0 35px;
    margin: auto;

    ${breakpoints.down("xs")} {
      padding: 0 25px;
    }
  }

  .srOnly {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
  }
`;

export default GlobalStyles;
