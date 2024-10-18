import logo from '../../Assets/Imagens/logo_efood.png'
import instagram from '../../Assets/Imagens/instagram.png'
import facebook from '../../Assets/Imagens/facebook.png'
import twitter from '../../Assets/Imagens/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterStyle>
    <S.Logo src={logo} alt="efood" />
    <S.List>
      <S.ListItem>
        <img src={instagram} alt="" />
      </S.ListItem>
      <S.ListItem>
        <img src={facebook} alt="" />
      </S.ListItem>
      <S.ListItem>
        <img src={twitter} alt="" />
      </S.ListItem>
    </S.List>
    <S.Copyrights>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Copyrights>
  </S.FooterStyle>
)

export default Footer
