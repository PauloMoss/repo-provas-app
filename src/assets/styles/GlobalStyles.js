import { createGlobalStyle } from "styled-components";

import BackgroundImage from "../images/repoprovas_background_image.jpg";

const GlobalStyle = createGlobalStyle`
body {
        font-family: 'Raleway', sans-serif;
        background-image: url(${BackgroundImage});
        background-size: cover;
    }  
`;

export default GlobalStyle;
