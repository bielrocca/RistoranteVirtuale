import React from 'react'
import { Container, GlobalStyle } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './Store'
import Cart from './Componentes/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <Rotas />
        </Container>
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
