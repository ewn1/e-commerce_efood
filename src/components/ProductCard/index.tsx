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
  onMoreDetails: () => void
}

const ProductCard = ({ image, title, description, onMoreDetails }: Props) => (
  <ProductCardContainer>
    <img src={image} />
    <ProductCardTitle>{title}</ProductCardTitle>
    <ProductCardDescription>{description}</ProductCardDescription>
    <ProductCardButton onClick={onMoreDetails}>Mais detalhes</ProductCardButton>
  </ProductCardContainer>
)

export default ProductCard
