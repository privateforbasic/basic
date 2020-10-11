import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  margin: -20% auto -5%;
  width: 100%;
  overflow-x: hidden;

  ${theme.breakpoints.between("xs", "md")} {
    margin: -26% auto -5%;
  }

  ${theme.breakpoints.down("xs")} {
    margin: -40% auto -13%;
  }

  h2 {
    color: #ec5569;
    -webkit-text-fill-color: #ec5569;
  }

  & > img {
    height: 60px;
    margin: auto calc(50% + 20px) auto;
    z-index: 999;
    position: relative;

    ${theme.breakpoints.down("md")} {
      margin-bottom: 25px;
    }
  }

  & > section {
    position: relative;
    padding: 10% 0 !important;
    background-image: linear-gradient(
      to right top,
      #051937,
      #552b5e,
      #a93864,
      #e56148,
      #f3a712
    );

    ${theme.breakpoints.between("xs", "md")} {
      padding: 14% 0 !important;
    }

    ${theme.breakpoints.down("xs")} {
      padding: 22% 0 !important;
    }

    .swiper-container {
      padding-top: 20px;
      margin-top: -150px;
      z-index: 2;

      ${theme.breakpoints.down("md")} {
        /* margin-top: -15%; */
        padding-left: 5%;
        padding-right: 5%;
      }

      ${theme.breakpoints.up("md")} {
        &:after {
          content: "";
          position: absolute;
          top: 33%;
          left: 0;
          height: 100%;
          width: 20%;
          /* background: linear-gradient(90deg, #ec5569 0%, transparent 100%); */
          z-index: 2;
        }

        &:before {
          content: "";
          position: absolute;
          top: 33%;
          right: 0;
          height: 100%;
          width: 20%;
          /* background: linear-gradient(-90deg, #e63950 0%, transparent 100%); */
          z-index: 2;
        }
      }
    }
    .swiper-wrapper {
      padding-top: 140px;
      max-width: 100vw;
      align-items: stretch;

      li {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;

        img {
          border-radius: 50%;
          width: 120px;
          height: 120px;
          border: 5px solid #ccc;
          box-shadow: 0 0 0 5px #fff, 0 0 15px #fff;
          object-fit: cover;
          object-position: center;
        }

        fieldset {
          width: 100%;
          border: 3px solid #fff;
          padding: 0 25px 25px;
          margin-top: 20px;
          border-radius: 35px;
        }

        legend {
          font-size: 1.4em;
          margin: 25px auto;
          padding: 0 25px;
          font-weight: bolder;
        }

        p {
          line-height: 1.4em;
        }
      }

      & + a {
        display: inline-block;
        padding: 15px 20px;
        background: #fff;
        border-radius: 15px;
        color: #e9445a;
        font-weight: bold;
        margin-top: 5%;
        overflow: auto;
        transition: 0.1s;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`;
