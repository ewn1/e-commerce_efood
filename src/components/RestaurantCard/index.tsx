import { Link } from 'react-router-dom'

import Tag from '../Tag'
import {
  RestaurantCardContainer,
  TagsContainer,
  RestaurantInfoContainer,
  RestaurantCardInfos,
  RestaurantCardDescription,
} from './styles'

import icon from '../../assets/star_favorite.png'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa,
}: Props) => (
  <RestaurantCardContainer>
    <img src={capa} alt={titulo} />
    <TagsContainer>
      {destacado && <Tag size="small">Destaque</Tag>}
      <Tag size="small">{tipo}</Tag>
    </TagsContainer>

    <RestaurantInfoContainer>
      <RestaurantCardInfos>
        <h3>{titulo}</h3>
        <div>
          <p>{avaliacao}</p>
          <img src={icon} alt="estrela" />
        </div>
      </RestaurantCardInfos>
      <RestaurantCardDescription>{descricao}</RestaurantCardDescription>
      <Link to={`/restaurantes/${id}`}>
        <Tag size="medium">Saiba Mais</Tag>
      </Link>
    </RestaurantInfoContainer>
  </RestaurantCardContainer>
)

export default RestaurantCard
