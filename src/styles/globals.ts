import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,
  body {
    font-family: Roboto, sans-serif;
    height: 100%;
    font-size: 16px;
  }

  body > div {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  } 

  @media only screen and (min-width: 1366px) {
    body, html {
      font-size: 24px;
    }
  }

`;
