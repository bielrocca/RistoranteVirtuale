import { Cardapio } from '../../Pages/Home'
import Produto from '../Produto'
import { ProductListStyle } from './styles'

type Props = {
  restaurante: Cardapio[]
}

const ListaProdutos = ({ restaurante }: Props) => {
  return (
    <ProductListStyle>
      {restaurante.map((produto) => (
        <Produto
          key={produto.id}
          descricao={produto.descricao}
          nome={produto.nome}
          foto={produto.foto}
          porcao={produto.porcao}
          preco={produto.preco}
        />
      ))}
    </ProductListStyle>
  )
}

export default ListaProdutos
