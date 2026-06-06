import styled from 'styled-components'

export const RestaurantListContainer = styled.div`
  padding: 80px 0 120px;

  @media (max-width: 768px) {
    padding: 40px 0 60px;
  }
`

export const HomeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
  }
`
