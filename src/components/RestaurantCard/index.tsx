import { Link } from 'react-router-dom'

import Tag from '../Tag'
import {
  RestaurantCardContainer,
  TagsContainer,
  RestaurantInfoContainer,
  RestaurantCardInfos,
  RestaurantCardDescription,
} from './styles'

type Props = {
  id: number
  infos: string[]
  image: string
  title: string
  score: number
  icon: string
  description: string
}

const RestaurantCard = ({
  id,
  infos,
  image,
  title,
  score,
  icon,
  description,
}: Props) => (
  <RestaurantCardContainer>
    <img src={image} alt={title} />
    <TagsContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <RestaurantInfoContainer>
      <RestaurantCardInfos>
        <h3>{title}</h3>
        <div>
          <p>{score}</p>
          <img src={icon} alt="estrela" />
        </div>
      </RestaurantCardInfos>
      <RestaurantCardDescription>{description}</RestaurantCardDescription>
      <Link to={`/restaurantes/${id}`}>
        <Tag size="medium">Saiba Mais</Tag>
      </Link>
    </RestaurantInfoContainer>
  </RestaurantCardContainer>
)

export default RestaurantCard
