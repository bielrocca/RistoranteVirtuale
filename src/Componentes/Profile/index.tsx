import { Cabecalho, CabecalhoImg, HomeLink, Logo } from './styles'
import logo from '../../Assets/Imagens/logo_efood.png'
import bgImg from '../../Assets/Imagens/fundo_header.png'
import { Restaurante } from '../../Pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../Store'
import { open } from '../../Store/Reducers/cart'

type Props = {
  restaurante: Restaurante
}

const RestaurantProfile = ({ restaurante }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Cabecalho style={{ backgroundImage: `url(${bgImg})` }}>
        <div>
          <HomeLink to={'/'}>Restaurantes</HomeLink>
          <Logo src={logo} alt="efood" />
          <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
        </div>
      </Cabecalho>
      <CabecalhoImg style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div>
          <h1>{restaurante.tipo}</h1>
          <h1>{restaurante.titulo}</h1>
        </div>
      </CabecalhoImg>
    </>
  )
}

export default RestaurantProfile
