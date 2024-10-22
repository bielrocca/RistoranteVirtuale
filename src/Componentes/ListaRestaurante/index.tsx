import RestaurantModel from '../../models/Restaurante'
import Restaurant from '../Restaurante'
import { Lista } from './styles'

export type Props = {
  restaurants: RestaurantModel[]
}
const ListaRestaurante = ({ restaurants }: Props) => (
  <Lista>
    {restaurants.map((restaurant) => (
      <Restaurant
        key={restaurant.id}
        name={restaurant.name}
        rating={restaurant.rating}
        description={restaurant.description}
        infos={restaurant.infos}
        image={restaurant.image}
      />
    ))}
  </Lista>
)
export default ListaRestaurante
