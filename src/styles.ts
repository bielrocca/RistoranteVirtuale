import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  fontColor: '#E66767',
  bgColor: '#FFF8F2',
  branco: '#fff',
  bgFooter: '#FFEBD9',
  inputTxtColor: '#4B4B4B'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
      background-color: ${cores.bgColor};
      color: ${cores.fontColor};
    }

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
  }
}
`

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
