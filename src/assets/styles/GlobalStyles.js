import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../images/repoprovas_background_image.jpg";

const GlobalStyle = createGlobalStyle`
body {
        font-family: 'Raleway', sans-serif;
        background:#fff url(${BackgroundImage}) center center no-repeat;
        background-attachment: fixed;
        &::-webkit-scrollbar {
         display: none;
}
    }  
`;

export default GlobalStyle;
