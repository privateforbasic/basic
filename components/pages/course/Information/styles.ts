import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
  margin: auto auto 75px;
  ul {
    display: flex;
    @media screen and (max-width: 960px) {
      width: 100%;
      display: inline-block;
      padding: 25px 30px;
      text-align: left;
      li:nth-of-type(2) {
        padding: 20px 0 15px;
      }
    }
    font-size: 1.1em;
    border: 2px solid #fff;
    padding: 15px 20px;
    border-radius: 25px;
    li {
      display: flex;
      align-items: center;
      &:before {
        content: "";
        display: inline-block;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 15px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
      }
      @media screen and (min-width: 961px) {
        &:not(:last-child) {
          padding-right: 25px;
          border-right: 1px solid #fff;
          margin-right: 25px;
        }
      }
      &:first-child:before {
        background-image: url("https://www.basic.am/static/media/calendar.5ed2e26e.svg");
      }
      &:nth-child(2):before {
        background-image: url("https://www.basic.am/static/media/price.74481f7a.svg");
      }
      &:nth-child(3):before {
        background-image: url("https://www.basic.am/static/media/waiting.c95ad299.svg");
        animation-name: rotate;
        animation-duration: 3s;
        animation-timing-function: cubic-bezier(0.46, 0.06, 0.72, 1.17);
        animation-iteration-count: infinite;
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;
