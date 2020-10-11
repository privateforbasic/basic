import styled from "styled-components";
import theme from "@styles/theme";


export const StyledSection = styled.section`
  text-align: center;

  section {
    counter-reset: lesson;
    max-width: 900px;
    margin: auto auto 50px;

    h4 {
      text-align: left;
      font-size: 1.3em;
      text-transform: capitalize;
      padding-bottom: 0.5em;
      padding: 0.5em;
      background: #ffffff0a;
      margin-bottom: 0.25em;

      :not(:first-of-type) {
        margin-top: 20px;
      }
    }

    h4,
    ul {
      :not(:first-of-type) {
        display: none;
      }
    }

    input {
      display: none;

      :checked {
        ~ ul {
          max-height: 2000px;
          -webkit-mask-image: none;
          mask-image: none;

          ::after {
            background-size: 1px 6000px;
          }
        }

        ~ h4,
        ~ ul {
          :not(:first-of-type) {
            display: block;
          }
        }

        ~ label {
          ::after {
            opacity: 0;
          }

          :hover {
            transform: translateY(-5px);
          }

          img {
            transform: rotate(180deg);
          }
        }
      }
    }
    
    ul {
      font-size: 1.1em;
      text-align: left;
      max-height: 170px;
      overflow: hidden;
      transition: 1s;
      -webkit-mask-image: linear-gradient(
        180deg,
        #000000 50%,
        transparent 100%
      );
      mask-image: linear-gradient(180deg, #000000 50%, transparent 100%);

      li {
        display: flex;
        align-items: baseline;

        ::before {
          counter-increment: lesson;
          content: "" counter(lesson) ".";
          font-family: Roboto;
          font-weight: 500;
          min-width: 30px;
          display: inline-block;
          padding-bottom: 1px;
        }

        p {
          width: 100%;
          border-bottom: 1px dashed #555;
          padding: 12px 0;
        }

        :last-child p {
          border-bottom: none;
        }
      }
    }

    label {
      display: block;
      cursor: pointer;
      transition: 0.5s;

      :hover {
        transform: translateY(5px);
      }

      img {
        display: inline-block;
        height: 30px;
        transition: 1s;
      }
    }
  }
`;
