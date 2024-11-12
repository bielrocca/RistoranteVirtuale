import { Restaurante } from '../../Pages/Home'
import Restaurant from '../Restaurante'
import { Lista } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  return (
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            titulo={restaurante.titulo}
            avaliacao={restaurante.avaliacao}
            descricao={restaurante.descricao}
            capa={restaurante.capa}
            id={restaurante.id}
          />
        ))}
      </Lista>
    </div>
  )
}

export default ListaRestaurante
