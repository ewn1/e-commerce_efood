import { BannerProfileImg, Category, Title } from './styles'

type Props = {
  image: string
  category: string
  title: string
}

const BannerProfile = ({ image, category, title }: Props) => (
  <BannerProfileImg style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Category>{category}</Category>
      <Title>{title}</Title>
    </div>
  </BannerProfileImg>
)

export default BannerProfile
