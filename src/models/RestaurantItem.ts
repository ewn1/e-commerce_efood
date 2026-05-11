import FoodItem from './FoodItem'

type RestaurantItem = {
  infos: string[]
  image: string
  title: string
  score: number
  icon: string
  description: string
  id: number
  menu?: FoodItem[]
}

export default RestaurantItem
