import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
  onMoreDetails: () => void
}

const ProductCard = ({ image, title, description, onMoreDetails }: Props) => (
  <S.ProductCardContainer>
    <img src={image} />
    <S.ProductCardTitle>{title}</S.ProductCardTitle>
    <S.ProductCardDescription>{description}</S.ProductCardDescription>
    <S.ProductCardButton onClick={onMoreDetails}>
      Mais detalhes
    </S.ProductCardButton>
  </S.ProductCardContainer>
)

export default ProductCard
