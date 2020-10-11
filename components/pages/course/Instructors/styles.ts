import styled, { css } from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  background: #13131855;
  position: relative;
  &:after {
    content: "";
    background: #13131855;
    width: 100%;
    height: 100px;
    display: block;
    position: absolute;
    bottom: -100px;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  @media screen and (min-width: 1025px) {
    &:before {
      content: "";
      background: #13131855;
      width: 100%;
      height: 100px;
      display: block;
      position: absolute;
      top: -100px;
    }
  }
  section {
    justify-content: center;
    display: flex;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }
    text-align: center;
    justify-content: center;
    a {
      background-color: #fff1;
      padding: 3% 5%;
      border-radius: 25px;
      background-size: 25px, 100px;
      background-repeat: no-repeat, repeat;
      background-position: right 25px bottom 15px, center;
      cursor: pointer;
      background-attachment: local, fixed;
      margin: 20px;
      width: calc(100% / 3);
      @media screen and (max-width: 1024px) {
        width: 45%;
        padding: 5%;
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        padding: 8% 5%;
        margin: 4% 2.5%;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
      &:nth-of-type(1) {
        background-image: url(/images/icons/linkedin.svg),
          url(/images/courses/companies-logos/picsart.svg);
      }
      &:nth-of-type(2) {
        background-image: url(/images/icons/linkedin.svg),
          url(/images/courses/companies-logos/digitain.svg);
      }
      &:nth-of-type(3) {
        background-image: url(/images/icons/linkedin.svg),
          url(/images/courses/companies-logos/10web.svg);
      }
      &:hover {
        background-color: #fff2;
      }
      img {
        border-radius: 50%;
        margin: auto;
        height: 120px;
        @media screen and (max-width: 600px) {
          height: 100px;
        }
      }
      h4 {
        margin: 15px auto 5px;
        font-size: 1.1em;
      }
      span {
        font-style: italic;
        color: #fff9;
        font-size: 0.9em;
      }
    }
  }
`;
