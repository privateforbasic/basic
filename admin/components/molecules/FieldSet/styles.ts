import theme from "@styles/theme";
import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  min-width: 100%;
  background-color: #1c1b1e; /* footer color */
  border-radius: 2em;
  padding: 2em;
  border: none;
  margin-top: -0.6em; /* for lagend */

  ${theme.breakpoints.down("md")} {
    min-width: 90%;
  }

  legend {
    font-size: 1.3em;
    color: white;
    transform: translateY(2em);
    margin-bottom: 1em;
  }

  .imgs {
    padding: 2em 2em;
    border-radius: 1em;
    background-color: #29282b;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      position: relative;

      :hover {
        transform: scale(1.1);

        span {
          visibility: visible;
          transition: all 0s 1s;
          cursor: pointer;
        }
      }

      img {
        margin: 1em;
        width: 4em;
        height: 4em;
        object-fit: contain;
        transition: all 0.2s ease;
        will-change: transform;
        cursor: pointer;

        &.active {
          border: 1px solid white;
        }
      }

      span {
        position: absolute;
        top: 0;
        right: 0;
        color: red;
        transform: rotate(45deg) translate(-20%, -50%);
        font-size: 2em;
        visibility: hidden;
      }
    }

    + div {
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 1em;
      grid-auto-columns: max-content;
      margin-top: 1.5em;

      .add_new {
        position: relative;
        overflow: hidden;

        input[type="file"] {
          position: absolute;
          top: 0;
          left: -150%;
          width: 250%;
          height: 100%;
          opacity: 0; /* for display none */
          margin: unset;
          cursor: pointer;
        }
      }
    }
  }

  p {
    color: #484848;
    margin-top: 2em;
    font-size: 0.8em;
  }
`;
