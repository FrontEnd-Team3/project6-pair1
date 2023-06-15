import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        list-style: none;
    }
    body{
        background-color: black;
    }
    button {
        border: none;
    }
    ul > li{
        list-style: none;
    }
`;

export default GlobalStyles;
