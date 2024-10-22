import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Profile from './Componentes/Profile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
)

export default Rotas
