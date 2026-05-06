import styled from 'styled-components'
import { Colors } from '../../styles'

export const FooterContainer = styled.div`
  width: 100%;
  height: 298px;
  background-color: ${Colors.bege};
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 40px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  > img:nth-child(2) {
    padding: 0 8px;
  }
`

export const Disclaimer = styled.p`
  margin-top: 80px;
  color: ${Colors.salmao};
  text-align: center;
`
