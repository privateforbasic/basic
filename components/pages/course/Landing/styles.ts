import styled from "styled-components";
import theme from "@styles/theme";
import { CourseSvg } from "@atoms";

// export const BackgroundImage = styled(CourseSvg)`
//   width: 45%;
//   position: absolute;
//   top: 200px;
//   display: block;
//   animation: animateWave 5s ease-in-out alternate infinite;
//   transform-origin: top;
//   overflow: hidden;
//   z-index: 0;
//   height: auto;

//   ${theme.breakpoints.down("xs")} {
//     width: 75%;
//   }

//   @keyframes animateWave {
//     0% {
//       transform: scale(1, 1);
//     }
//     100% {
//       transform: scale(1.05, 1.1);
//     }
//   }
// `;

export const StyledSection = styled.section`
  display: grid;
  min-height: calc(100vh - 90px);
  margin-top: 90px;
  justify-content: end;
  align-items: center;
  padding-right: 15%;
  position: relative;
  width: 100%;

  @media screen and (max-width: 1024px) and (orientation: portrait) {
    padding: 0;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) and (orientation: landscape) {
    padding: 0;
    justify-content: center;
  }

  ${theme.breakpoints.down("xs")} {
    padding: 0 5%;
    margin: 0 auto;
    min-height: 100vh;
  }

  article {
    margin: auto;
    max-width: 460px;
    text-align: center;
    z-index: 2;

    @media screen and (max-width: 900px) and (orientation: landscape) {
      margin: auto;
    }

    img {
      height: 120px;
    }

    section {
      display: inline-block;
      padding: 5% 8%;
      margin: 25px 0;
      border-radius: 25px;
      text-align: center;
      box-shadow: 0 15px 15px -15px #080808;
      background: linear-gradient(260deg, #1c1c25 20%, #1e1e29);
      backdrop-filter: blur(10px);
    }

    p {
      font-size: 1.1em;
      line-height: 23px;
      text-align: justify;
      margin-bottom: 25px;
    }
  }

  .scroll-link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1;

    ${theme.breakpoints.down("md")} {
      display: none;
    }

    .mouse {
      max-width: 2rem;
      width: 100%;
      height: auto;

      @keyframes scroll {
        0%,
        20% {
          transform: translateY(0) scaleY(1);
        }
        100% {
          transform: translateY(36px) scaleY(2);
          opacity: 0;
        }
      }

      .scroll {
        animation-name: scroll;
        animation-duration: 1.5s;
        animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
        animation-iteration-count: infinite;
        transform-origin: 50% 20.5px;
        will-change: transform, opacity;
        opacity: 1;
      }
    }
  }
`;
