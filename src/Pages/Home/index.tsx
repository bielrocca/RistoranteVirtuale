import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Home'
import RestaurantList from '../../Componentes/ListaRestaurante'
import RestaurantModel from '../../models/Restaurante'
import hiokiSushi from '../../Assets/Imagens/hiokiSushi.svg'
import dolceVita from '../../Assets/Imagens/DolceVita.svg'

const restaurantes: RestaurantModel[] = [
  {
    id: 1,
    image: hiokiSushi,
    name: 'Restaurante 1',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Japonesa', 'Destaque da Semana']
  },
  {
    id: 2,
    image: dolceVita,
    name: 'Restaurante 2',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurantes} />
    <Footer />
  </>
)
export default Home
