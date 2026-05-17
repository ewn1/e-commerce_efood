import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RestaurantItem } from '../../types'

import ProductList from '../../components/ProductList'
import HeaderProfile from '../../components/HeaderProfile'
import BannerProfile from '../../components/BannerProfile'

const RestaurantProfile = () => {
  const { id } = useParams()

  const [restaurantSelected, setRestaurantSelected] = useState<RestaurantItem>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantSelected(res))
  }, [id])

  if (!restaurantSelected) {
    return <h3>Restaurante não encontrado, por favor, tente novamente</h3>
  }

  return (
    <>
      <HeaderProfile />
      <BannerProfile
        image={restaurantSelected.capa}
        category={restaurantSelected.tipo}
        title={restaurantSelected.titulo}
      />
      <ProductList products={restaurantSelected.cardapio || []} />
    </>
  )
}

export default RestaurantProfile
