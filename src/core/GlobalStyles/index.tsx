import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .content {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  .content img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
    }
  
    .content img {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
