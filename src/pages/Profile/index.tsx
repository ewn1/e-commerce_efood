import { useParams } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import HeaderProfile from '../../components/HeaderProfile'
import BannerProfile from '../../components/BannerProfile'
import restaurantes from '../../mocks/restaurantes'

const RestaurantProfile = () => {
  const { id } = useParams()

  const restaurantSelected = restaurantes.find(
    (restaurant) => restaurant.id === Number(id),
  )

  if (!restaurantSelected) {
    return <h3>Restaurante não encontrado, por favor, tente novamente</h3>
  }

  return (
    <>
      <HeaderProfile />
      <BannerProfile
        image={restaurantSelected.image}
        category={restaurantSelected.infos[0]}
        title={restaurantSelected.title}
      />
      <ProductList products={restaurantSelected.menu || []} />
    </>
  )
}

export default RestaurantProfile
