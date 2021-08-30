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
        background: ${({ theme }) => theme.colors.grey[9]};
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: ${({ theme }) => theme.colors.grey[5]};
      }
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.grey[4]};
      }
  }
`;

export default GlobalStyle;
