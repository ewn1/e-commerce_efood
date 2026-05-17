import styled from 'styled-components'
import { Colors } from '../../styles'

export const RestaurantCardContainer = styled.div`
  width: 100%;
  background-color: ${Colors.branco};
  border: 1px solid ${Colors.salmao};
  position: relative;
  display: flex;
  flex-direction: column;

  > img {
    display: block;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 217px;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const RestaurantInfoContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;

  a {
    margin-top: auto;
  }
`

export const RestaurantCardInfos = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.salmao};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    img {
      margin-left: 8px;
      width: 21px;
      height: 20px;
    }
  }
`

export const RestaurantCardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${Colors.salmao};
  text-align: justify;
  line-height: 22px;
`
