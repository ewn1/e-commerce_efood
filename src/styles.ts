import { createGlobalStyle } from 'styled-components'

export const Colors = {
  bodyBg: '#FFF8F2',
  branco: '#FFFFFF',
  bege: '#FFEBD9',
  salmao: '#E66767',
  black: '#4b4b4b',
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Colors.bodyBg};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
