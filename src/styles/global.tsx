import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: #F8F8F8;
}

#root{
    display: flex !important;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-top: 40px;
}
`;
