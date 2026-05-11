import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import restaurantes from '../../mocks/restaurantes'

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurantes} />
  </>
)

export default Home
