import { Link } from 'react-router-dom'

import Tag from '../Tag'
import * as S from './styles'

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
  <S.RestaurantCardContainer>
    <img src={capa} alt={titulo} />
    <S.TagsContainer>
      {destacado && <Tag size="small">Destaque</Tag>}
      <Tag size="small">{tipo}</Tag>
    </S.TagsContainer>

    <S.RestaurantInfoContainer>
      <S.RestaurantCardInfos>
        <h3>{titulo}</h3>
        <div>
          <p>{avaliacao}</p>
          <img src={icon} alt="estrela" />
        </div>
      </S.RestaurantCardInfos>
      <S.RestaurantCardDescription>{descricao}</S.RestaurantCardDescription>
      <Link to={`/restaurantes/${id}`}>
        <Tag size="medium">Saiba Mais</Tag>
      </Link>
    </S.RestaurantInfoContainer>
  </S.RestaurantCardContainer>
)

export default RestaurantCard
