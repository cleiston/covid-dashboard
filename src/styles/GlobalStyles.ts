import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Montserrat', sans-serif;

    }

    :root {
        --header: #3B0273;
        --footer: #2B2140;
        --content: #C195FF;
    
        --white: #fff;
        --gray: #8a8c90;

        --light-green: #38BD98;
        --light-purple: #9056E1;
        --light-pink: #EC9AAE;

        --link: #5d80d6;   
    }
`;