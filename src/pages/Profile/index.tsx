import ProductList from '../../components/ProductList'
import HeaderProfile from '../../components/HeaderProfile'
import FoodItem from '../../models/FoodItem'

const restaurantMenu: FoodItem[] = [
  {
    id: 1,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 2,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 3,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 4,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 5,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
  {
    id: 6,
    image: 'https://placehold.co/304x167',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  },
]

const RestaurantProfile = () => (
  <>
    <HeaderProfile />
    <ProductList products={restaurantMenu} />
  </>
)

export default RestaurantProfile
