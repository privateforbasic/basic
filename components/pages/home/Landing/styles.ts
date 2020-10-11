import styled, { keyframes } from "styled-components";
import theme from "@styles/theme";

const showBottomText = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const showTopText = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;
const loading = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(250vw);
  }
`;

const imageChange = keyframes`
  /* 0%{background-image: url("/images/background/landing-background-min.png");}
  10%{background-image: url("/images/background/landing-background1-min.png");}
  20%{background-image: url("/images/background/landing-background2-min.png");}
  30%{background-image: url("/images/background/landing-background3-min.png");}
  40%{background-image: url("/images/background/landing-background4-min.png");}
  50%{background-image: url("/images/background/landing-background5-min.png");}
  60%{background-image: url("/images/background/landing-background6-min.png");}
  70%{background-image: url("/images/background/landing-background7-min.png");}
  80%{background-image: url("/images/background/landing-background8-min.png");}
  90%{background-image: url("/images/background/landing-background4-min.png");}
  100%{background-image: url("/images/background/landing-background5-min.png");} */
`;

export const StyledSection = styled.section`
  position: relative;
  display: grid;
  height: 100vh;
  place-items: center;
  overflow: hidden;
  text-align: left;
  background-color: #0a0a0a;

  .container {
    z-index: 1;
  }

  hgroup {
    position: relative;
    min-height: 200px;

    div {
      height: 50%;
      overflow: hidden;
      position: absolute;
      width: 100%;

      h2 {
        position: absolute;
        margin: 0;
        text-align: left;
        font-size: 2.8em !important;
        -webkit-text-fill-color: unset;
      }

      &.text-top h2 {
        animation: ${showTopText} 1s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
        bottom: 0;
        transform: translate(0, 100%);
      }

      &.text-bottom {
        bottom: 0;

        h2 {
          animation: ${showBottomText} 0.5s;
          animation-delay: 1.75s;
          animation-fill-mode: forwards;
          top: 0;
          transform: translate(0, -100%);
          color: rgb(255 1 70);
        }
      }
    }

    + button {
      ::after {
        content: "";
        width: 0.4em;
        height: 0.4em;
        margin: 0 0.3em;
        border: 2px solid ${theme.colors.white};
        border-top: none;
        border-left: none;
        display: inline-block;
        transform: rotate(-45deg);
      }

      :hover::after,
      :focus::after {
        border-color: ${theme.colors.primary};
      }
    }
  }

  &:before {
    content: "";
    animation: ${imageChange} 20s linear infinite alternate,
      ${loading} 200s linear infinite;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 500vw;
    height: calc(100% - 80px);
    /* background-image: url("/images/background/landing-background-min.png"); */
    background-position: 0 0;
    background-size: contain;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(180deg, transparent 0%, #131318);
    pointer-events: none;
  }

  #landingVideo {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    padding: 0;
    height: 100%;

    video {
      object-fit: cover;
      object-position: center;
      position: static;
      width: 100%;
      height: 100%;
    }

    &:after {
      content: "";
      background: radial-gradient(584px at 5% 40%, #131318 49%, #131318c4 300%);
      /* background: radial-gradient(500px at 25% 50%, #131318 50%, #131318bd 300%); */
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }

  #notification {
    display: none;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    z-index: 9;
    background: linear-gradient(-45deg, #00c3ff, #009750);
    padding: 2rem;
    padding-bottom: 1rem;
    border-radius: 1rem;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: calc(100% - 1rem);
      height: calc(100% - 1rem);
      background: linear-gradient(45deg, #fff3, #fff1);
      z-index: -9999;
      margin: auto;
      border-radius: 0.5rem;
    }

    &:before {
      content: "";
      display: block;
      width: 17px;
      height: 17px;
      /* background-image: url(https://image.flaticon.com/icons/svg/2088/2088076.svg); */
      background-size: cover;
      filter: invert(1);
      position: absolute;
      top: 17px;
      right: 17px;
    }

    a {
      display: block;
      text-align: right;
      margin-top: 1rem;
      text-decoration: underline;
      font-size: 0.8rem;
    }
  }
`;
