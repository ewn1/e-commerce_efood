import Tag from '../Tag'
import {
  Card,
  CardHeader,
  Description,
  InfoContainer,
  TagsContainer,
} from './styles'

type Props = {
  infos: string[]
  image: string
  title: string
  score: number
  icon: string
  description: string
}

const Product = ({ infos, image, title, score, icon, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <TagsContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <InfoContainer>
      <CardHeader>
        <h3>{title}</h3>
        <div>
          <p>{score}</p>
          <img src={icon} alt="estrela" />
        </div>
      </CardHeader>
      <Description>{description}</Description>
      <Tag size="medium">Saiba Mais</Tag>
    </InfoContainer>
  </Card>
)

export default Product
