import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f4f4f4;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center; 
        height: 100vh;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    form {
        display: flex;
        flex-direction: column; 
        max-width: 300px; 
        margin: 0 auto; 
    };

    label {
        margin-bottom: 8px;
    };

    input {
        padding: 8px;
        margin-bottom: 16px; 
    };

    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 8px 16px;
        cursor: pointer;
    };

    h1 {
    font-size: 24px;
    margin-bottom: 16px;
    color: #333;
    };

    h2 {
        font-size: 20px;
        margin-bottom: 12px;
        color: #007bff;
    };

`;