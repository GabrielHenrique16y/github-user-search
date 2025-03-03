import { createGlobalStyle, styled } from 'styled-components';
import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.textColor};
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    button {
        cursor: pointer;
        background: ${(props) => props.theme.btnColor};
        border: none;
        color: ${(props) => props.theme.textColor};
        padding: 10px 20px;
        border-radius: 4px;
        font-weight: 700;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.linkColor};
    }

    ul {
        list-style: none;
    }

    .Toastify__toast--warning {
        background: #FFE8BC !important;
    }

    .Toastify__toast--error {
        background: #FCA7A9 !important;
    }
    
    .toastBody {
        font-family: "Atlas Grotesk Web", Arial, Helvetica, sans-serif;
        color: ${(props) => props.theme.toastTextColor};
        font-size: 0.875rem !important;
    }

    .toastProgress {
        background: #333F48 !important;
    }
`;

export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    height: calc(100% - 78px);
    border-radius: 10px;
    transition: background-color 0.3s ease;
`;
