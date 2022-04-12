import { css } from "@emotion/react";
import MQ from "./MediaQueries";

const GlobalStyle = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
    font-family: "Kumbh Sans", sans-serif;
  }

  html {
    height: 100vh;
    background: hsl(273, 75%, 66%);
    background: linear-gradient(
      0deg,
      hsl(273, 75%, 66%) 0%,
      hsl(240, 73%, 65%) 100%
    );
  }

  body {
    margin: 0;
    padding: 30px;
    color: ${theme.colors.textPrimary};

    ${MQ.tablet} {
      height: 100vh;
    }
  }

  #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
