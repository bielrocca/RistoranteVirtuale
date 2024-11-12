import { Cardapio } from '../../Pages/Home'
import Produto from '../Produto'
import { ProductListStyle } from './styles'

type Props = {
  produtos: Cardapio[]
}

const ProductList = ({ produtos }: Props) => {
  return (
    <div className="container">
      <ProductListStyle>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            id={produto.id}
            descricao={produto.descricao}
            nome={produto.nome}
            foto={produto.foto}
            porcao={produto.porcao}
            preco={produto.preco}
          />
        ))}
      </ProductListStyle>
    </div>
  )
}

export default ProductList
