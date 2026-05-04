import Header from './components/Header'
import { GlobalStyle } from './styles'
import ProductList from './components/ProductList'
import star_favorite from './assets/star_favorite.png'

const comidaTeste = [
  {
    id: 1,
    title: 'Tavola Redonda',
    description: 'Cantina Italiana',
    infos: ['Destaque da semana', 'italiano'],
    image: 'https://placehold.co/472x217',
    score: 4.8,
    icon: star_favorite,
  },
]

const testeGrid = [
  ...comidaTeste,
  ...comidaTeste,
  ...comidaTeste,
  ...comidaTeste,
  ...comidaTeste,
  ...comidaTeste,
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProductList products={testeGrid} />
    </>
  )
}

export default App
