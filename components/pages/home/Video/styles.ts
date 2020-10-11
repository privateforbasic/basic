import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  margin-top: 100px;
  margin-bottom: -1px;

  ${theme.breakpoints.up("xs")} {
    margin-top: 150px;
  }

  .container {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 5rem;
    align-items: center;
    justify-content: center;
    grid-column-gap: 100px;

    ${theme.breakpoints.up(1280)} {
      grid-template-columns: 1fr 1fr;
    }

    ul {
      text-align: left;
      display: grid;
      grid-row-gap: 3.5rem;

      ${theme.breakpoints.down("md")} {
        /* grid-row-gap: 10px; */
      }

      li {
        display: flex;
        font-size: 1.5em;
        align-items: flex-start;

        &:hover {
          article:after {
            filter: grayscale(0);
            opacity: 1;
          }
        }

        &:first-of-type {
          article {
            &:before {
              background-image: url(https://www.basic.am/static/media/creativity.f1726f9f.svg);
            }
          }
        }

        &:nth-of-type(2) {
          article {
            &:before {
              background-image: url(https://www.basic.am/static/media/teamwork.c266ec92.svg);
            }
          }
        }

        &:nth-of-type(3) {
          article {
            &:before {
              background-image: url(https://www.basic.am/static/media/map.a7b6b694.svg);
            }
          }
        }

        article {
          padding-left: 0px;
          text-align: center;
          position: relative;

          ${theme.breakpoints.up("xs")} {
            padding-left: 150px;
            text-align: left;
          }

          ${theme.breakpoints.up("md")} {
            padding-left: 160px;
          }

          &:before {
            content: "";
            left: 0;
            width: 125px;
            height: 100px;
            position: static;
            display: block;

            ${theme.breakpoints.up("xs")} {
              width: 140px;
              height: 90px;
              position: absolute;
            }

            ${theme.breakpoints.up("md")} {
              width: 140px;
              height: 100px;
            }

            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;
            filter: grayscale(1);
            opacity: 0.2;
            bottom: 0;
            margin: auto;
            transition: 0.25s;
            will-change: opacity, filter;
          }

          &:hover {
            &:before {
              filter: grayscale(0);
              opacity: 1;
            }
          }

          h4 {
            display: inline-block;
            font-size: 2rem;
            margin: 25px auto 15px;

            ${theme.breakpoints.up("xs")} {
              margin: 0 auto 15px;
            }
          }

          p {
            font-size: 1.1rem;
          }
        }
      }
    }
    
    video {
      ${theme.breakpoints.down("xs")} {
        width: 95%;
      }

      ${theme.breakpoints.up(1280)} {
        width: 100%;
        height: 350px;
      }

      background: #000;
      border-radius: 25px;
      width: 70%;
      height: auto;
      box-shadow: 0 0 50px -10px #fff3, 0px 0px 0 1.5em #0003;
      object-fit: cover;
      object-position: center;
      margin: auto;
    }
  }
`;
