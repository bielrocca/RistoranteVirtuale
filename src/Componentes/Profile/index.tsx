import { Cabecalho, CabecalhoImg, HomeLink, Logo } from './styles'
import logo from '../../Assets/Imagens/logo_efood.png'
import bgImg from '../../Assets/Imagens/fundo_header.png'
import dolceVita from '../../Assets/Imagens/DolceVita.svg'
import Footer from '../Footer'
import ListaProdutos from '../ListaProdutos'

const RestaurantProfile = () => (
  <>
    <Cabecalho style={{ backgroundImage: `url(${bgImg})` }}>
      <div>
        <HomeLink to={'/'}>Restaurantes</HomeLink>
        <Logo src={logo} alt="efood" />
        <p>0 produto(s) no carrinho</p>
      </div>
    </Cabecalho>
    <CabecalhoImg style={{ backgroundImage: `url(${dolceVita})` }}>
      <div>
        <h1>Italiana</h1>
        <h1>La Dolce Vita Trattoria</h1>
      </div>
    </CabecalhoImg>
    <ListaProdutos />
    <Footer />
  </>
)

export default RestaurantProfile
