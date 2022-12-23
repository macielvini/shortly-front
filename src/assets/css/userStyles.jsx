import { createGlobalStyle } from "styled-components";

const UserStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* outline: 1px dashed yellow; */
  }

  body {
    font-family: 'Lexend Deca', sans-serif;
    background: #262835;
    color: #fff;

    padding-bottom: 80px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default UserStyles;
