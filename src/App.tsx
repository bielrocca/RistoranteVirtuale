import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'

import { Container, GlobalStyle } from './styles'

import HomeHeader from './Componentes/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
