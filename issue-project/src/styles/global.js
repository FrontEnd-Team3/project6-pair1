import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        color: white
    }
    body{
        background-color: black;
    }
    button {
        border: none;
        background-color: grey;
        color: white
    }
    ul > li{
        list-style: none;
    }
`;

export default GlobalStyles;
