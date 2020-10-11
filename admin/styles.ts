import styled from "styled-components";

export const Application = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 250px auto;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  main {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    header {
      display: flex;
      height: 100px;
      width: 100%;
      background-color: #29282b;
      justify-content: space-between;
      align-items: center;
      padding: 0 2.5rem;
      color: #fff;
      position: fixed;
      z-index: 1000;

      #searchBox {
        width: 25%;
        min-width: 250px;

        input {
          border: 0;
          background: #fff;
          padding: 1em;
          border-radius: 50px;
          font-size: 0.9em;
          width: 100%;
        }
      }
    }
  }
`;
