import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { RestaurantItem } from '../../types'
import Loader from '../../components/Loader'

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantItem[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      {restaurants.length === 0 ? (
        <Loader />
      ) : (
        <RestaurantList restaurants={restaurants} />
      )}
    </>
  )
}

export default Home
