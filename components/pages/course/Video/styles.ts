import styled from "styled-components";
import theme from "@styles/theme";

export const StyledSection = styled.section`
  background-image: url(/images/background/pattern.png);
  background-origin: border-box;
  background-position: center;

  section {
    iframe {
      margin-top: 10px;
      width: 890px;
      height: 500px;
      border-radius: 25px;
      box-shadow: 0 0 50px -10px #fff3, 0px 0px 0 1.5em #0003;
    }
  }
`;
