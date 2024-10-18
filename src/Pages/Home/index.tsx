import HomeHeader from '../../Componentes/Home'
import ListaRistorante from '../../Componentes/ListaRistorante'
import Footer from '../../Componentes/Footer'

import Restaurante1 from '../../Assets/Imagens/ristorante_1.png'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  avaliacao: string
  descricao: string
  capa: string
  cardapios: Cardapio[]
}

const ristorantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Restaurante 1',
    destacado: false,
    avaliacao: '4,6',
    descricao: 'Uma ótima opção para comer um almoço delicioso.',
    capa: Restaurante1,
    cardapios: []
  },
  {
    id: 2,
    titulo: 'Restaurante 2',
    destacado: false,
    avaliacao: '4,6',
    descricao: 'Uma ótima opção para comer um almoço delicioso.',
    capa: Restaurante1,
    cardapios: []
  }
]

const Home = () => (
  <>
    <HomeHeader />
    <ListaRistorante restaurantes={ristorantes} />
    <Footer />
  </>
)

export default Home
