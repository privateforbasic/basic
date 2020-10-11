import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  padding: 50px 35px 0;
  background: linear-gradient(0deg, #000, transparent 100%);

  ${theme.breakpoints.down("xs")} {
    padding: 50px 25px;
  }

  .container {
    padding: 0;

    #tabs {
      display: inline-flex;
      overflow: auto;
      background: #0a0b10;
      padding: 5px;
      margin-bottom: 100px;
      border-radius: 25px;

      ${theme.breakpoints.up("xs")} {
        padding: 15px;
      }

      #mobile-nav {
        ${theme.breakpoints.up("xs")} {
          display: none;
        }
      }

      #desktop-nav {
        ${theme.breakpoints.down("xs")} {
          display: none;
        }
      }

      ul {
        ${theme.breakpoints.up("xs")} {
          &:hover li:not(:last-of-type) {
            display: block;
          }
        }

        ${theme.breakpoints.down("xs")} {
          display: flex;
          flex-direction: column;
        }

        ${theme.breakpoints.up("xs")} {
          grid-template-columns: 1fr;
          grid-row-gap: 15px;
          grid-column-gap: 15px;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        ${theme.breakpoints.up("md")} {
          display: flex;
          position: relative;
        }

        li {
          flex-shrink: 0;
          position: relative;

          ${theme.breakpoints.down("xs")} {
          }

          ${theme.breakpoints.up("xs")} {
            display: block !important;

            &:not(:first-of-type) {
              display: none;
            }

            &:first-of-type {
              button {
                margin-left: 0;
              }
            }

            &:nth-last-of-type(2) {
              button {
                margin-right: 0;
                color: #ff4555;

                &:hover {
                  border-color: #ff4555;
                }

                &[aria-current="true"] {
                  background: #ff4555;
                  color: #fff;
                }
              }
            }
          }

          &[aria-hidden="true"] {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            border-bottom: 2px solid #000;
            pointer-events: none;
            transition: transform 0.3s, width 0.3s;
            transition-timing-function: ease-in-out;
            will-change: width, transform;
          }

          button {
            width: 100%;
            background: transparent;
            color: #fff;
            font-size: 1rem;
            margin: 0;
            padding: 10px 15px;
            border-radius: 15px;
            cursor: pointer;
            transition: 0.1s;
            border: 2px solid transparent;
            opacity: 0.6;

            ${theme.breakpoints.up("xs")} {
              border-color: #fff1;

              &:hover {
                border: 2px solid white;
                opacity: 1;
              }
            }

            ${theme.breakpoints.up("md")} {
              border-color: transparent;
              width: auto;
              margin-left: 15px;
            }

            &[aria-current="true"] {
              border-radius: 15px;
              color: #fff;
              font-weight: bold;
              opacity: 1;

              &:after {
                content: "";
                display: inline-block;
                width: 15px;
                height: 15px;
                background: url(/images/icons/arrow-down.svg);
                background-size: cover;
                vertical-align: middle;
                margin-left: 10px;
              }

              ${theme.breakpoints.up("xs")} {
                background: #fff;
                color: #222;

                &:after {
                  display: none;
                }
              }
            }
          }
        }
      }
    }

    #courses {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      /* columns: 1; */

      ${theme.breakpoints.up("xs")} {
        /* columns: 2; */
        /* column-gap: 4%; */
      }

      ${theme.breakpoints.up("xs")} {
        /* columns: 2; */
        /* column-gap: 4%; */
      }

      ${theme.breakpoints.up("md")} {
        /* columns: 3; */
        /* column-gap: 2.5%; */
      }

      ${theme.breakpoints.down(320)} {
        justify-content: center;
        /* margin-bottom: 7%; */
      }

      a {
        width: 100%;
        text-shadow: 0px 0px 10px #0005;
        /* width: 100%; */
        padding: 25px;
        margin-bottom: 2.5%;
        /* margin-bottom: 4%; */
        cursor: pointer;

        ${theme.breakpoints.down(320)} {
          width: calc(80%);
        }

        ${theme.breakpoints.up("xs")} {
          width: calc(95% / 2);
          /* margin-bottom: 7%; */
        }

        ${theme.breakpoints.up("md")} {
          width: calc(95% / 3);
          /* margin-bottom: 7%; */
        }

        border-radius: 25px;
        position: relative;
        transition: 0.25s;
        will-change: transform, box-shadow;
        border-bottom: 8px solid #0005;
        background-origin: border-box;

        &:hover {
          /* transform: scale(1.05); */
          /* background-position: 0 -10px; */
          box-shadow: 0 0 25px -10px #fff9;
          filter: brightness(1.1) contrast(1);

          figure {
            box-shadow: 0 4px 0px 2px #fff4;
          }
        }

        :active {
          border-bottom-width: 3px;
          margin-top: 5px;
        }

        .pro {
          position: absolute;
          top: 15px;
          right: 15px;
          border-radius: 10px;
          background: #0008;
          color: #fff;
          font-size: 0.8rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          padding: 5px calc(10px - 0.2em) 5px 10px;
          border-bottom: 3px solid #0008;
        }

        figure {
          border-radius: 50%;
          width: 125px;
          height: 125px;
          background: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s;
          box-shadow: 0 4px 0px 2px #fff8;
          margin: 5px auto;

          img {
            height: calc(100% - 40px);
            border-radius: 25%;
          }
        }

        h2 {
          margin: 15px auto;
          font-size: 1.7rem;
        }
      }
    }
  }

  + section {
    background: #000;
    padding: 50px 0;
  }
`;

interface CourseInterface {
  gradient: string;
}

export const StyledCourse = styled.a<CourseInterface>`
  background-image: ${({ gradient }) => gradient};
`;
