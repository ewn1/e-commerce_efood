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
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 125px;
  height: 58px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${Colors.salmao};
  margin-top: 138.5px;
  text-align: center;
`
