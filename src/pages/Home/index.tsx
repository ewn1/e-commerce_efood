import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import RestaurantItem from '../../models/RestaurantItem'

import star_favorite from '../../assets/star_favorite.png'

const restaurantes: RestaurantItem[] = [
  {
    id: 1,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
  {
    id: 2,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
  {
    id: 3,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
  {
    id: 4,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
  {
    id: 5,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
  {
    id: 6,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurants={restaurantes} />
  </>
)

export default Home
