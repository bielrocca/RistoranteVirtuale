import { useParams } from 'react-router-dom'

import { useGetRestaurantSelectedQuery } from '../../Services/API'

import Footer from '../../Componentes/Footer'

import ProductList from '../../Componentes/ListaProdutos'
import RestaurantProfile from '../../Componentes/Profile'

const Profile = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurante } = useGetRestaurantSelectedQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantProfile restaurante={restaurante} />
      <ProductList produtos={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Profile
