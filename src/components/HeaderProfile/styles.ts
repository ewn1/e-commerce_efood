import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeaderProfileContainer = styled.div`
  width: 100%;
  height: 186px;
`

export const HeaderProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 64px 0;
  font-weight: bold;
  color: ${Colors.salmao};

  a {
    color: ${Colors.salmao};
    text-decoration: none;
  }

  span {
    cursor: pointer;
  }
`
