import { Header, Logo, Slogan } from './styles'

import logo from '../../Assets/Imagens/logo_efood.png'
import fundo from '../../Assets/Imagens/fundo_header.png'

const HomeHeader = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <Logo src={logo} alt="efood" />
    <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
  </Header>
)

export default HomeHeader
