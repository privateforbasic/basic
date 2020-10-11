import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  .menu {
    margin-bottom: 1em;
    padding: 1em 0;
    position: sticky;
    top: 100px;
    background-color: #131318;
    z-index: 1;

    ~ .menu {
      margin: 0;
      z-index: 2;
      border-top: 1px solid #606060;

      .addNewItem {
        width: 2em;
        font-size: 1.5em;
        margin: 0.2em 0.5em;
        padding: unset;
        display: grid;
        place-content: center;
      }

      + div {
        padding-top: 1em;
        background: #131318;
        position: relative;
        z-index: 1;
      }
    }

    ~ form {
      ~ .menu {
        margin-top: 3em;
      }
    }

    ul {
      display: flex;
      flex-flow: wrap;

      li {
        padding: 0.8em 1.5em;
        margin: 0.3em 0.5em;
        border-radius: 3em;
        color: #606060;
        background-color: #1c1b1e;
        border: 1px solid transparent;
        cursor: pointer;

        &.current {
          border-color: white;
          color: white;
        }

        &.not-ctive {
          color: black;
          cursor: no-drop;
        }
      }
    }
  }
`;
