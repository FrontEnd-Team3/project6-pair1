import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        list-style: none;
    }
    html{
        height: 100%;
    }
    body{
        height: 100%;
        background-color: #0E1117;
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
