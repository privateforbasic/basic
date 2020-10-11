import styled, { keyframes, css } from "styled-components";
import theme from "@styles/theme";

/**
 * Logo
 */
export const Logo = styled.a``;

export const Nav = styled.nav`
  display: flex;
  padding: 17px 0;
  align-items: center;
  border-radius: 25px;
  font-size: 1.1em;

  ${theme.breakpoints.down("xs")} {
    background: transparent;
    padding: 17px 10px;
  }

  ul {
    display: none;

    ${theme.breakpoints.up("xs")} {
      display: flex;

      li {
        display: flex;
        padding-right: 25px;
        border-right: 2px solid ${theme.colors.white};
        margin-right: 25px;

        &:first-child {
          margin-left: -5px;
        }

        a {
          color: ${theme.colors.white};
          display: inline-block;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.3s;
          overflow: hidden;

          &:hover,
          &:focus,
          &.active {
            span {
              transform: translateY(-100%);
            }
          }

          span {
            position: relative;
            display: inline-block;
            padding: 0 5px;
            transition: transform 0.3s;

            &:before {
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
    }
  }

  .menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    margin: -20px 0;
    width: 30px;

    &:hover {
      filter: ${theme.dropShadow.effect1};

      span {
        &:nth-of-type(1) {
          transform: translateX(-4px);
        }

        &:nth-of-type(3) {
          transform: translateX(4px);
        }
      }
    }

    span {
      transition: 0.1s;
      display: inline-block;
      width: 7px;
      height: 7px;
      background: ${theme.colors.white};
      border-radius: 100px;

      &:nth-of-type(2) {
        margin: 0 4px;
      }
    }

    &.active {
      pointer-events: auto;

      span {
        &:nth-of-type(1) {
          width: 20px;
          height: 3px;
          transform: rotate(45deg);
        }

        &:nth-of-type(2) {
          visibility: hidden;
          margin: 0 -13.5px;
        }

        &:nth-of-type(3) {
          width: 20px;
          height: 3px;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

/**
 * Search
 */
export const Search = styled.a`
  border-radius: 50%;
  padding: 16px;
  transition: all 0.1s;

  ${theme.breakpoints.down("xs")} {
    display: none;
  }

  img {
    height: 22px;
    margin: auto;
    transition: 0.1s;
  }

  :hover {
    background: ${theme.colors.white};

    img {
      filter: invert(1);
    }
  }
`;

/**
 * Flags list
 */
export const Flags = styled.ul`
  position: relative;

  li {
    padding: 12px;
    background: linear-gradient(-20deg, #0005, #0003);
    transition: 0.1s;

    ${theme.breakpoints.down("xs")} {
      background: transparent;
      padding: 0;

      :last-child {
        display: none;
      }
    }

    :first-child {
      border-radius: 100px;
      position: relative;
      z-index: 1;
    }

    ${theme.breakpoints.up("xs")} {
      :last-child {
        position: absolute;
        border-radius: 0 0 100px 100px;
        opacity: 0;
        top: 0;
      }
    }

    a {
      img {
        height: 30px;
      }
    }
  }

  :hover {
    li {
      :first-child {
        border-radius: 100px 100px 0 0;
      }

      :last-child {
        top: 54px;
        opacity: 1;
      }
    }
  }
`;

export interface StyledHeader {
  main: boolean;
  courses: boolean;
}

/**
 * Styled header
 */
export const StyledHeader = styled.header<StyledHeader>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  justify-content: center;
  /* background: #11111177; */
  backdrop-filter: blur(10px);
  z-index: ${theme.zIndex.header};
  transition: 0.1s;

  ${theme.breakpoints.down("xs")} {
    background: #111;
  }

  .container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;

    > section {
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 25px;
      align-items: center;

      ${theme.breakpoints.down("md")} {
        grid-column-gap: 20px;
      }
    }

    .logo {
      margin: 35px 0;
      /* transition: 0.3s; */

      ${theme.breakpoints.down("xs")} {
        margin: 25px 0;
      }

      img {
        height: 50px;

        :hover {
          filter: ${theme.dropShadow.effect1};
        }

        ${theme.breakpoints.down("xs")} {
          height: 45px;
        }
      }
    }
  }

  &.test {
    background: #13131877;

    #logo {
      /* margin: 25px 0; */
    }
  }

  @keyframes toggleMenu {
    from {
      visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
  }
  @keyframes toggleHeader {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
  }

  &.menu-opened {
    background: transparent;
    backdrop-filter: none;
    pointer-events: none;

    .container {
      #logo {
        animation: toggleMenu 0.2s linear forwards;
      }

      > section {
        nav {
          background: transparent;
          backdrop-filter: none;

          ul {
            animation: toggleMenu 0.2s linear forwards;
          }
        }

        #search,
        #flags {
          animation: toggleMenu 0.2s linear forwards;
        }
      }
    }
  }

  ${({ courses }) =>
    courses &&
    css`
      position: relative;
    `}

  ${({ main }) =>
    main &&
    css`
      .container {
        position: relative;
        #logo {
          /* animation-name: initialLogo, fixLogo; */
          animation-duration: 2s, 0.01s;
          animation-delay: 2s, 4s;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
          /* transform: translateY(-100%);
          position: absolute;
          top: 50px;
          left: calc(50% - 70px); */
        }
        & > section {
          /* animation-name: toggleHeader; */
          animation-duration: 1s;
          animation-delay: 4s;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
          /* visibility: hidden;
          opacity: 0; */
        }
      }

      @keyframes initialLogo {
        from {
          left: calc(50% - 70px);
        }
        to {
          transform: translateY(0);
          top: 0;
          left: 0;
        }
      }
      @keyframes fixLogo {
        from {
          position: absolute;
        }
        to {
          position: static;
        }
      }
    `}
`;
