import { FoodItem } from '../../types'
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
            image={product.foto}
            title={product.nome}
            description={product.descricao}
          />
        ))}
    </ProfileList>
  </ProductListContainer>
)

export default ProductList
