import { Cabecalho, Logo, Slogan } from './styles'

import logo from '../../Assets/Imagens/logo_efood.png'
import fundo from '../../Assets/Imagens/fundo_header.png'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Header = () => (
  <Cabecalho style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} alt="efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </Cabecalho>
)

export default Header
