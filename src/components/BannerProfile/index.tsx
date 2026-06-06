import * as S from './styles'

type Props = {
  image: string
  category: string
  title: string
}

const BannerProfile = ({ image, category, title }: Props) => (
  <S.BannerProfileImg style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <S.Category>{category}</S.Category>
      <S.Title>{title}</S.Title>
    </div>
  </S.BannerProfileImg>
)

export default BannerProfile
