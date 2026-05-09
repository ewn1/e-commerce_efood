import styled from 'styled-components'
import { Colors } from '../../styles'

export const ProductCardContainer = styled.div`
  width: 100%;
  padding: 8px;
  background-color: ${Colors.salmao};
  display: flex;
  flex-direction: column;
  color: ${Colors.bege};

  > img {
    display: block;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    height: 167px;
  }
`
export const ProductCardTitle = styled.h3`
  margin-top: 8px;
  font-weight: bold;
`
export const ProductCardDescription = styled.p`
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
  line-height: 22px;
`

export const ProductCardButton = styled.button`
  height: 24px;
  background-color: ${Colors.bege};
  color: ${Colors.salmao};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
