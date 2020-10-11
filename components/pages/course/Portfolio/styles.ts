import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  margin-top: -35px;
  
  @media only screen and (max-width: 1024px) {
    margin-top: calc(-95px + 2.5%);
  }

  @media only screen and (max-width: 768px) {
    margin-top: calc(-95px + 5%);
  }

  @media only screen and (min-width: 768px) {
    @keyframes loading {
      0% {
        transform: translateX(0);
      }
      to {
        transform: translateX(250vw);
      }
    }

    :before {
      content: "";
      animation: loading 200s linear infinite;
      position: absolute;
      top: 0;
      right: 0;
      width: 500vw;
      height: 100%;
      background-image: url("https://fiprofile.cdnpk.net/dist/assets/1989eb8cdc96bd581c8bad946688879b.jpg");
      background-color: #fff;
      background-position: 0 0;
      background-size: contain;
    }
  }

  .container {
    position: relative;
    z-index: 3;
    text-align: left;

    @media only screen and (max-width: 767px) {
      background: #fff;
    }

    :before {
      content: "";
      position: absolute;
      top: 0;
      right: 80%;
      width: 100vw;
      height: 100%;
      background: #fff;
    }

    .content {
      position: relative;
      z-index: 3;
      display: inline-block;
      padding: 10% 0;
      color: #111;
      width: 100%;
      text-align: center;

      @media only screen and (min-width: 768px) {
        text-align: left;
        max-width: 600px;
        width: auto;
        padding: 125px 150px 125px 0;
        background: url("https://fiprofile.cdnpk.net/dist/assets/e636a61c755c4f0b736973e0a3b05fce.svg")
          100% 0 no-repeat;
        background-size: cover;
      }

      .logo {
        width: 200px;
        max-height: 50px;
        margin-bottom: 25px;

        @media only screen and (max-width: 768px) {
          width: 150px;
          margin: auto auto 25px;
        }
      }

      p {
        margin: 0 0 15px;
        font-weight: bold;
        font-size: 1.1em;

        :last-of-type {
          font-weight: 300;
          font-size: 1em;
        }
      }

      a {
        margin-top: 5px;
        border-color: #111;
        color: currentColor;
        padding: 10px 20px;
        font-size: 18px;

        :hover {
          background-color: #111;
          color: #fff;
        }
      }
    }
  }
`;
