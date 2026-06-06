import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderHome = styled.div`
  width: 100%;
  height: 384px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 280px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 125px;
  height: 58px;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${Colors.salmao};
  margin-top: 80px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 40px;
    padding: 0 16px;
  }
`
