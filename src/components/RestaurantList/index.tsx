import RestaurantItem from '../../models/RestaurantItem'
import Product from '../Product'
import { ContainerList, List } from './styles'

export type Props = {
  products: RestaurantItem[]
}

const RestaurantList = ({ products }: Props) => (
  <ContainerList className="container">
    <List>
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            infos={product.infos}
            image={product.image}
            title={product.title}
            score={product.score}
            icon={product.icon}
            description={product.description}
          />
        ))}
    </List>
  </ContainerList>
)

export default RestaurantList
