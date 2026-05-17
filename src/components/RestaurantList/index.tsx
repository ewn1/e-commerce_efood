import { RestaurantItem } from '../../types'
import RestaurantCard from '../RestaurantCard'
import { RestaurantListContainer, HomeList } from './styles'

export type Props = {
  restaurants: RestaurantItem[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <RestaurantListContainer className="container">
    <HomeList>
      {restaurants &&
        restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            titulo={restaurant.titulo}
            destacado={restaurant.destacado}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
          />
        ))}
    </HomeList>
  </RestaurantListContainer>
)

export default RestaurantList
