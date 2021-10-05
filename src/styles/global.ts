import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --red: #e52e40;
  --blue: #5429cc;
  --blue-light: #6933ff;

  --text-title: #363f5f;
  --text-body: #969cb3;
  
  --shape: #ffffff;
  --background: #F0F2F5;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poopins', sans-serif;
    font-weight: 400;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }


`;