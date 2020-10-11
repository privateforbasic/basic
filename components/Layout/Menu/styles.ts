import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  place-items: center;
  place-content: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  overflow: auto;
  animation: toggleMenu 0.2s linear forwards;

  &.active {
    animation: toggleHeader 0.2s linear forwards;

    nav {
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    }
  }

  #search-results {
    display: none;
    position: absolute;
    top: 70px;
    width: 100%;
    background: #fff;
    padding: 15px;
    text-align: left;
    font-size: 1rem;
    box-shadow: 0px 15px 15px #0008;
    border-radius: 0 0 25px 25px;
    z-index: 1;

    ul {
      li {
        :not(:last-child) {
          border-bottom: 1px solid #ccc;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }

        a {
          color: #000;
        }
      }
    }
  }

  nav {
    transform: translateY(-100px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    display: grid;
    grid-row-gap: 25px;
    position: relative;

    @media only screen and (max-width: 960px) and (max-height: 400px) and (orientation: landscape) {
      margin: 250px 0 50px;
    }

    @media only screen and (max-height: 500px) {
      margin: 250px 0 50px;
    }

    input {
      font-size: 2rem;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      border-radius: 25px 25px 0 0;
      color: #fff;
      padding: 20px 15px 15px;
      text-align: center;
      opacity: 0.5;
      transition: 0.1s;
      max-width: 300px;
      margin: auto;

      ::placeholder {
        color: #fff;
        text-transform: uppercase;
      }

      :hover,
      :focus,
      :active {
        opacity: 1;
      }

      &.filled {
        opacity: 1;
        background-color: #fff;
        color: #111;

        + #search-results {
          display: block;
        }
      }
    }

    & > a {
      color: #fff;
      font-size: 2rem;
      display: inline-block;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s;
      overflow: hidden;

      :hover,
      :focus {
        span {
          transform: translateY(-100%);
        }
      }

      span {
        position: relative;
        display: inline-block;
        padding: 0 8px;
        transition: transform 0.3s;

        &.active {
          transform: translateY(-100%);
        }

        ::before {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          text-align: center;
          width: 100%;
          content: attr(data-hover);
          font-weight: 900;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }
`;
