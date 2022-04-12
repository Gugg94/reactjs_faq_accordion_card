import { css } from "@emotion/react";

const GlobalStyle = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.body};
    color: ${theme.colors.textPrimary};
  }
`;

export default GlobalStyle;
