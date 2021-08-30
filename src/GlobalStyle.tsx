import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  body {
     background-color: white;
     margin: 0;
  }
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    /* width */
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      border-radius: 20px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 20px;
      background: rgba(0,0,0,.1);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: rgba(0,0,0,.15);
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,.4);
    }
  }
`;

export default GlobalStyle;
