import styled from "styled-components";
import theme from "@styles/theme";

export const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding: 50px 35px 35px;
  border-top: 5px solid #111;
  background: #000;
  font-size: 1.1em;
  box-shadow: 0px 0px 25px 5px #0005;
  position: relative;
  z-index: 10;

  ${theme.breakpoints.down("md")} {
    padding: 5%;
  }

  ${theme.breakpoints.down("xs")} {
    padding: 8%;
  }

  & > section {
    display: grid;
    grid-template-columns: auto auto 0.5fr;
    max-width: 1280px;
    margin: auto;
    justify-content: space-between;

    ${theme.breakpoints.down("md")} {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 50px;
    }

    ${theme.breakpoints.down("xs")} {
      grid-template-columns: 1fr;
    }

    & > ul {
      ${theme.breakpoints.down("md")} {
        &:last-child {
          grid-column: 1 / span 2;
        }

        &:not(:last-child) {
          border-bottom: 2px solid #111;
          padding-bottom: 45px;
        }
      }

      ${theme.breakpoints.down("xs")} {
        &:last-child {
          grid-column: 1;
        }
      }

      &:nth-child(2) {
        ${theme.breakpoints.down("xs")} {
          & > li:last-child {
            display: none;
          }

          & > li:nth-last-child(2) {
            margin-bottom: 0;
          }
        }
      }

      &:last-child {
        li {
          &:first-child {
            margin-bottom: 60px;
          }

          &:last-child {
            fieldset {
              border: 0;
              padding: 25px 0;
            }
          }
        }

        #social {
          display: flex;
          justify-content: space-around;

          a {
            transition: 0.1s;
            &:hover {
              transform: scale(1.1);
            }

            img {
              height: 50px;
              margin: auto;
            }
          }
        }
      }

      &:not(:last-child) {
        li {
          a {
            border-bottom: 1px solid transparent;
            padding-bottom: 5px;

            &:hover {
              border-color: #fff;
            }
          }
        }
      }
      li {
        text-align: left;

        &:not(:last-of-type) {
          margin-bottom: 15px;
        }

        a {
          display: inline-block;

          img {
            height: 25px;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
            outline: 10px solid #000;
          }
        }

        iframe {
          display: block;
        }

        fieldset {
          border: 2px solid #fff;
          color: #fff;
          padding: 25px;
          border-radius: 25px;
          text-align: center;

          legend {
            padding: 0 25px;
            margin: auto;
          }

          input {
            border: 0;
            padding: 15px;
            font-size: 0.9rem;

            &[type="text"] {
              border-radius: 15px 0 0 15px;
              width: 65%;
              background: #fff;
            }

            &[type="submit"] {
              border-radius: 0 15px 15px 0;
              width: 35%;
              background: #ccc;
              cursor: pointer;

              &:hover {
                background: #bbb;
              }
            }
          }
        }
      }
    }
  }

  p {
    color: #fff;
    padding-top: 35px;

    span {
      font-size: 1.2em;
      color: #db295c;
    }
  }
`;
