import {
  ProductCardContainer,
  ProductCardTitle,
  ProductCardDescription,
  ProductCardButton,
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ProductCard = ({ image, title, description }: Props) => (
  <ProductCardContainer>
    <img src={image} />
    <ProductCardTitle>{title}</ProductCardTitle>
    <ProductCardDescription>{description}</ProductCardDescription>
    <ProductCardButton>Adicionar ao carrinho</ProductCardButton>
  </ProductCardContainer>
)

export default ProductCard
