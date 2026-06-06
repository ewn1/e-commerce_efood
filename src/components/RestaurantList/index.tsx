import { RestaurantItem } from '../../types'
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

export type Props = {
  restaurants: RestaurantItem[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.RestaurantListContainer className="container">
    <S.HomeList>
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
    </S.HomeList>
  </S.RestaurantListContainer>
)

export default RestaurantList
