import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
    * {
        margin : 0;
        padding : 0;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        --color-primary : ${(props) => props?.theme?.colors?.main};
        --color-primary-dark : ${(props) => props?.theme?.colors?.dark};
        --color-primary-light : ${(props) => props?.theme?.colors?.light};
        --color-primary-ligher : ${(props) => props?.theme?.colors?.lighter};
        --text-color : ${(props) => props?.theme?.colors?.text};
        --border-color : rgba(176, 190, 197, 0.5);
        --shadow-color : rgba(0, 0, 0, 0.2);
        --shadow-color : rgba(0, 0, 0, 0.25);

         @media ${(props) => props.theme.mediaQueries.largest}{
            font-size : 57.5%;
        }

        @media ${(props) => props.theme.mediaQueries.large}{
            font-size: 55%;
        }
    }

    body {
        font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        line-height: 1.6;
    }

    button {
        outline: none;
        cursor: pointer;
    }

    a {
        outline: none;
        border : none;
        text-decoration: none;
        color : black;
    }
`;
