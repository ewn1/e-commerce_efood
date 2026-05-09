import FoodItem from '../../models/FoodItem'
import ProductCard from '../ProductCard'
import { ProductListContainer, ProfileList } from './styles'

export type Props = {
  products: FoodItem[]
}

const ProductList = ({ products }: Props) => (
  <ProductListContainer className="container">
    <ProfileList>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
    </ProfileList>
  </ProductListContainer>
)

export default ProductList
