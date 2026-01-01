import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    /* FONT FACE */
    @font-face {
        font-family: 'texta-bold';
        src: url('../../assets/fonts/texta-bold/Texta-Bold.eot') format("embedded-opentype"),
            url('../../assets/fonts/texta-bold/Texta-bold.ttf') format("truetype"),
            url('../../assets/fonts/texta-bold/Texta-bold.woff') format("woff")
            url('../../assets/fonts/texta-bold/Texta-bold.woff2') format("woff2");
    }


    /* VARS */
    :root{
        --font-stack-1: 'Sora', sans-serif;
        --font-stack-2: 'Roboto', sans-serif;
        --font-stack-3: 'Poppins', sans-serif;
        --font-stack-4: 'texta-bold';
        --green: #4ABC55;
        --pink: #FF3F6D;
        --red: #DE0F0F;
        --purple: #816BFF;
        --purple-2: #AC4ABC;
        --purple-3: #DE0F0F;
        --yellow: #EFDA6D;
        --white-1: #FFFFFF;
        --black-1: #000000;
        --black-2: #2B2727;
        --grey-1: #727272;
        --grey-2: #c4c4c4;
        --grey-3: #383338;

    }

    /* RESETS */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: var(--font-stack-1); */
        
    }

    body{
        background: var(--black-2);
        color: var(--white-1);
        
        @media(min-width: 1200px){
            height: 100vh;
        }
    }

    h1,h2,h3,h4,h5,h6{
        font-family: var(--font-stack-3);
    }

    a{
        text-decoration: none;
    }
`