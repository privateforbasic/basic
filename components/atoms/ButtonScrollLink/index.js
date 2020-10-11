import styled from "styled-components";
import theme from "@styles/theme";

const StyledButton = styled.button`
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
`;

const ButtonScrollLink = () => {
  return (
    <StyledButton className="scroll-link" aria-label="scroll down">
      <svg
        className="mouse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 76 130"
        preserveAspectRatio="xMidYMid meet"
      >
        <g fill="transparent" fillRule="evenodd">
          <rect
            width="70"
            height="118"
            x="1.5"
            y="1.5"
            stroke="#FFF"
            strokeWidth="3"
            rx="36"
          ></rect>
          <circle
            className="scroll"
            cx="36.5"
            cy="31.5"
            r="4.5"
            fill="#FFF"
          ></circle>
        </g>
      </svg>
    </StyledButton>
  );
};

export default ButtonScrollLink;
