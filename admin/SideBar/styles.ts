import styled from "styled-components";

export const Aside = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #29282b;

  #logo {
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.1);
    z-index: 1;

    img {
      display: block;
      max-height: 100px;
      padding: 1.5rem;
      width: 100%;
      background: #fff;
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    background: #141316;
    /* flex-grow: 1; */

    li.active {
      background: #141316;
      color: #fff;
      border-right: 0;
      border-bottom: 0;
      position: relative;

      ::before {
        content: "";
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        background-color: transparent;
        border: 7px solid #141316;
        border-bottom: none;
        border-right: none;
        border-top-left-radius: 2em;
        transform: rotate(180deg) translate(-0.4em, 1.1em);
      }

      ::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1em;
        height: 1em;
        background-color: transparent;
        border: 7px solid #141316;
        border-bottom: none;
        border-right: none;
        border-top-left-radius: 2em;
        transform: rotate(90deg) translate(1em, -0.4em);
      }
    }

    > li {
      width: 100%;
      color: #fff;
      font-weight: 400;
      border-bottom: 1px solid #141316;
      word-wrap: break-word;
      background-color: #29282b;
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-column-gap: 15px;
      cursor: pointer;

      :not(.active):hover {
        background-color: #fff;
        color: #222529;
        font-weight: 400;

        span {
          background-color: #fff;
        }
      }

      + ul {
        width: 100%;
        overflow: hidden;
        /* transition: all 0.3s ease-in; */

        li {
          display: flex;
          color: #fff;
          font-weight: 400;
          border-bottom: 1px solid #141316;
          word-wrap: break-word;
          background-color: #29282b;

          a {
            padding: 1em 1em 1em 85px;
            width: 100%;
            color: inherit;
          }
        }
      }

      span {
        background-color: #00000050;
        display: flex;
        height: 100%;
        width: 70px;
        padding: 1.25em 1em;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 1.5rem;
          height: 1em;
        }
      }
    }
  }

  #copyrights {
    color: #888;
    background: #00000050;
    font-size: 0.8rem;
    text-align: center;
    margin: auto;
    padding: 15px 0;
    width: 100%;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;
