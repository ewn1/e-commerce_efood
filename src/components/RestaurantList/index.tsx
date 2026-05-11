import RestaurantItem from '../../models/RestaurantItem'
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
            id={restaurant.id}
            key={restaurant.id}
            infos={restaurant.infos}
            image={restaurant.image}
            title={restaurant.title}
            score={restaurant.score}
            icon={restaurant.icon}
            description={restaurant.description}
          />
        ))}
    </HomeList>
  </RestaurantListContainer>
)

export default RestaurantList
