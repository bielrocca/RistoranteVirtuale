import { Restaurante } from '../../Pages/Home'
import Ristorante from '../Ristorantes'
import { Lista } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  return (
    <Lista>
      {restaurantes.map((restaurante) => (
        <Ristorante
          key={restaurante.id}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          descricao={restaurante.descricao}
          capa={restaurante.capa}
          id={restaurante.id}
        />
      ))}
    </Lista>
  )
}

export default RestaurantList
