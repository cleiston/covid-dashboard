import { createGlobalStyle } from 'styled-components';

// Global CSS styles

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: color .3s;
    }

    html {
        scroll-behavior: smooth;
    }

    #root {
        display: flex;
        flex-direction: column;
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

    ::selection {
        color: var(--footer);
        background: var(--light-purple);
    }
`;